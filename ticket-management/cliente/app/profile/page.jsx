"use client"

import { useState } from "react"
import Header from "@/components/header"

export default function ProfilePage() {
const [name, setName] = useState("Nombre de Usuario")
const [email, setEmail] = useState("usuario.correo@ejemplo.com")
const [phone, setPhone] = useState("+1 (XXX) XXX-XXXX")

const handleSave = () => {
  console.log("Perfil guardado:", { name, email, phone })
  // In a real app, send this to your backend
}

return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Header />
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        paddingTop: "80px",
        flex: 1,
      }}
    >
      <div className="card" style={{ width: "100%", maxWidth: "480px" }}>
        <div className="card-header">
          <h2 className="card-title">Configuración de Perfil</h2>
          <p className="card-description">Gestiona tu información de perfil.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <div className="avatar" style={{ height: "96px", width: "96px", fontSize: "36px" }}>
              <span>US</span>
            </div>
            <button
              className="button button-ghost"
              style={{ border: "1px solid #e0e0e0", padding: "8px 16px", borderRadius: "6px" }}
            >
              Cambiar Foto
            </button>
          </div>
          <div style={{ display: "grid", gap: "16px" }}>
            <div style={{ display: "grid", gap: "8px" }}>
              <label htmlFor="name" style={{ fontSize: "14px", fontWeight: "500" }}>
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <label htmlFor="email" style={{ fontSize: "14px", fontWeight: "500" }}>
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <label htmlFor="phone" style={{ fontSize: "14px", fontWeight: "500" }}>
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <button onClick={handleSave} className="button button-primary" style={{ width: "100%" }}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  </div>
)
}
