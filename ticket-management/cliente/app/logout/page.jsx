"use client" // Add this directive as useRouter is a client hook

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate any logout logic here (e.g., clearing tokens, session data)
    // For now, we just redirect
    router.push("/")
  }, [router])

  // This page will be empty as it immediately redirects
  return null
}
