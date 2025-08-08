const CACHE_NAME = "rhs-waidhan-v2"
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
  const req = event.request;
  if (req.method !== "GET") return;
  if (!req.url.startsWith(self.location.origin)) return;

  const url = new URL(req.url);
  const isNavigate = req.mode === "navigate";
  const isRSC = url.searchParams.has("_rsc") ||
    req.headers.get("Accept")?.includes("text/x-component");

  // Navigations: network-only, fallback to /offline
  if (isNavigate) {
    event.respondWith(
      fetch(req).catch(() => caches.match("/offline"))
    );
    return;
  }

  // Don’t touch RSC
  if (isRSC) return;

  // Cache only real static assets (examples)
  const isNextStatic = url.pathname.startsWith("/_next/static/");
  const isImage = url.pathname.match(/\.(png|jpg|jpeg|webp|gif|svg)$/);
  const isFont = url.pathname.match(/\.(woff2?|ttf|otf|eot)$/);
  if (!(isNextStatic || isImage || isFont)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      const resp = await fetch(req).catch(() => null);
      if (resp && resp.ok && resp.type === "basic") cache.put(req, resp.clone());
      return resp || new Response("Offline", { status: 503 });
    })
  );
});


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
