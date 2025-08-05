const CACHE_NAME = "rhs-waidhan-v1"
const OFFLINE_URL = "/offline"

// Assets to cache on install
const STATIC_CACHE_URLS = [
  "/",
  "/home",
  "/about",
  "/academics",
  "/portal",
  "/admissions",
  "/contact",
  "/offline",
  "/site.webmanifest",
  "/images/rhs-logo.webp",
  "/images/rhs-logo1.png",
  "/favicon.ico",
  "/apple-touch-icon.webp",
]

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...")
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching static assets")
        return cache.addAll(STATIC_CACHE_URLS)
      })
      .then(() => {
        console.log("Static assets cached")
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error("Failed to cache static assets:", error)
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...")
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("Service Worker activated")
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Serving from cache:", event.request.url)
        return cachedResponse
      }

      console.log("Fetching from network:", event.request.url)
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Cache the response
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If both cache and network fail, show offline page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_URL)
          }

          // For other requests, return a generic offline response
          return new Response("Offline", {
            status: 503,
            statusText: "Service Unavailable",
          })
        })
    }),
  )
})

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    console.log("Background sync triggered")
    event.waitUntil(
      // Handle background sync logic here
      Promise.resolve(),
    )
  }
})

// Push notification handling
self.addEventListener("push", (event) => {
  console.log("Push notification received")

  const options = {
    body: event.data ? event.data.text() : "New notification from RHS Waidhan",
    icon: "/images/rhs-logo.webp",
    badge: "/images/rhs-logo.webp",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Details",
        icon: "/images/rhs-logo.webp",
      },
      {
        action: "close",
        title: "Close",
        icon: "/images/rhs-logo.webp",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("RHS Waidhan", options))
})

// Notification click handling
self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked")
  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  }
})
