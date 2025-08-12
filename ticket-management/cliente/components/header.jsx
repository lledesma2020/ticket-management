"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Ticket, BarChart2, Settings } from 'lucide-react' // Import new icons

export default function Header() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" passHref>
          {/* Adjusted logo styling */}
          <div
            style={{
              backgroundColor: "white", // White background for contrast
              padding: "4px 8px", // Small padding around the logo
              borderRadius: "6px", // Slightly rounded corners
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img src="/logo-ac.png" alt="AssistCargo" style={{ height: "28px" }} /> {/* Slightly reduced height to fit padding */}
          </div>
        </Link>
        <div style={{ display: "flex", gap: "16px", marginLeft: "24px" }}>
          <Link href="/tickets" passHref>
            <span style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              <Ticket style={{ height: "18px", width: "18px" }} /> {/* Ticket Icon */}
              Tickets
            </span>
          </Link>
          <Link href="/informes" passHref>
            <span style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              <BarChart2 style={{ height: "18px", width: "18px" }} /> {/* BarChart2 Icon */}
              Informes
            </span>
          </Link>
          <Link href="/ajustes" passHref>
            <span style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              <Settings style={{ height: "18px", width: "18px" }} /> {/* Settings Icon */}
              Ajustes
            </span>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
        <button
          className="button button-ghost"
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background-color 0.2s",
          }}
        >
          <div
            className="avatar"
            style={{ height: "32px", width: "32px", backgroundColor: "white", color: "#4CAF50", fontSize: "14px" }}
          >
            <span>US</span>
          </div>
          <span>Usuario</span>
          <ChevronDown style={{ height: "16px", width: "16px" }} />
        </button>
        {isProfileDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <Link
                href="/profile"
                style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}
              >
                Mi Perfil
              </Link>
            </div>
            <div className="dropdown-item">
              <Link
                href="/logout"
                style={{ display: "block", width: "100%", textDecoration: "none", color: "inherit" }}
              >
                Cerrar Sesión
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
