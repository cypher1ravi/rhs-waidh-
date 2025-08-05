import type { Metadata } from "next"
import OfflinePageClient from "./OfflinePageClient"

export const metadata: Metadata = {
  title: "Offline - Ravindra High School",
  description: "You are currently offline. Please check your internet connection.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function OfflinePage() {
  return <OfflinePageClient />
}
