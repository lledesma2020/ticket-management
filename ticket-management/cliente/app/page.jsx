"use client"

import Link from "next/link"

export default function WelcomeLoginPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "16px",
      }}
    >
      <div className="card" style={{ width: "100%", maxWidth: "380px", textAlign: "center" }}>
        <div className="card-header">
          <img
            src="/logo-ac.png"
            alt="AssistCargo Logo"
            style={{ height: "64px", marginBottom: "16px", display: "block", margin: "0 auto" }} // Added display: "block" and margin: "0 auto"
          />
          <h2 className="card-title">Bienvenido a Assistcargo</h2>
          <p className="card-description">Inicia sesión para acceder al sistema de gestión de tickets.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="email" placeholder="Correo electrónico" className="input-field" />
          <input type="password" placeholder="Contraseña" className="input-field" />
          <button className="button button-primary" style={{ width: "100%" }}>
            Iniciar Sesión
          </button>
          <Link href="/tickets" style={{ textDecoration: "none", display: "block", width: "100%", textAlign: "center" }}>
            <button className="button button-ghost" style={{ width: "100%" }}>
              Ir a Tickets (Demo)
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
