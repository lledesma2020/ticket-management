"use client"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children }) {
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "16px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "8px",
          backgroundColor: "white",
          padding: "24px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#333333" }}>{title}</h2>
          <button
            onClick={handleClose}
            style={{ color: "#757575", border: "none", background: "none", cursor: "pointer", padding: "4px" }}
            aria-label="Close"
          >
            <X style={{ height: "20px", width: "20px" }} />
          </button>
        </div>
        <div style={{ paddingTop: "16px" }}>{children}</div>
      </div>
    </div>
  )
}
