"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Link from "next/link"
import { useRouter } from "next/navigation" // Import useRouter

export default function EditUserPage({ params }) {
  const router = useRouter()
  const { id } = params // Get user ID from URL parameters

  // Placeholder user data (replace with actual data fetching)
  const [user, setUser] = useState({
    id: id,
    nombre: "Cargando...",
    email: "cargando@ejemplo.com",
    password: "", // Password field is typically not pre-filled for security
    powerBi1: "",
    powerBi2: "",
    powerBi3: "",
    powerBi4: "",
    powerBi5: "",
    sector: "", // Will be set by fetched data or default
    posicion: "",
    respondeA: "",
    permisos: "Usuario", // Default permission
  })

  const positions = [
    "CEO",
    "CEO Assistcargo",
    "CFO",
    "Director Operación",
    "Gerente Aplicaciones",
    "Gerente Comercial",
    "Gerente Operaciones",
    "Gerente RRHH",
    "Gerente Sistemas",
    "Gerente Técnico Comercial",
    "Jefe Administración",
    "Jefe Custodia Móvil",
    "Jefe Dispositivos Móviles",
    "Jefe Operaciones",
    "Jefe SAC",
    "Jefe Técnico y Calidad",
    "Líder Operaciones",
    "Operador de Cuenta",
    "Operador de Monitoreo",
    "Presidente",
    "Responsable área integraciones GPS y Gestión de Datos Operaciones",
    "Supervisor",
  ].sort() // Sort alphabetically

  const sectors = [
    "Sistemas",
    "Operación",
    "RRHH",
    "Comercial",
    "Adm&Fin",
    "Dirección",
  ].sort() // Sort alphabetically

  useEffect(() => {
    // Simulate fetching user data based on ID
    // In a real application, you would fetch this from your backend
    const fetchUserData = async () => {
      // Example: fetch(`/api/users/${id}`).then(res => res.json())
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay

      const dummyUsers = [
        { id: "1", nombre: "Juan Pérez", email: "juan.perez@example.com", sector: "Operación", posicion: "Operador de Cuenta", respondeA: "Gerente de Operaciones", permisos: "Usuario", powerBi1: "Enlace al informe 1", powerBi2: "", powerBi3: "", powerBi4: "", powerBi5: "" },
        { id: "2", nombre: "María García", email: "maria.garcia@example.com", sector: "Adm&Fin", posicion: "CFO", respondeA: "Director Financiero", permisos: "Administrador", powerBi1: "", powerBi2: "Link BI 2", powerBi3: "", powerBi4: "", powerBi5: "" },
        { id: "3", nombre: "Carlos López", email: "carlos.lopez@example.com", sector: "Sistemas", posicion: "Gerente Sistemas", respondeA: "Jefe de Sistemas", permisos: "Usuario", powerBi1: "", powerBi2: "", powerBi3: "Link BI 3", powerBi4: "", powerBi5: "" },
      ]
      const foundUser = dummyUsers.find(u => u.id === id)

      if (foundUser) {
        setUser(prev => ({ ...prev, ...foundUser }))
      } else {
        // Handle user not found, e.g., redirect to 404 or user list
        console.error(`Usuario con ID ${id} no encontrado.`)
        router.push("/ajustes") // Redirect to settings page if user not found
      }
    }

    fetchUserData()
  }, [id, router])

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser(prev => ({ ...prev, [id]: value }))
  }

  const handleSave = () => {
    console.log("Guardando cambios para el usuario:", user)
    // In a real app, send this data to your backend
    alert("Cambios guardados (simulado)!")
    router.push("/ajustes") // Go back to user list after saving
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
        }}
      >
        <div className="card" style={{ width: "100%", maxWidth: "700px" }}>
          <div className="card-header" style={{ textAlign: "left" }}>
            <Link href="/ajustes" style={{ textDecoration: "none", color: "#4CAF50", fontSize: "14px", display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
              Volver al Listado de Usuarios
            </Link>
            <h2 className="card-title">Editar Usuario: {user.nombre}</h2>
            <p className="card-description">Gestiona la información y permisos de este usuario.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div className="avatar" style={{ height: "96px", width: "96px", fontSize: "36px" }}>
                <span>{user.nombre ? user.nombre.substring(0, 2).toUpperCase() : 'US'}</span>
              </div>
              <button
                className="button button-ghost"
                style={{ border: "1px solid #e0e0e0", padding: "8px 16px", borderRadius: "6px" }}
              >
                Cambiar Foto
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="nombre" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={user.nombre}
                  onChange={handleChange}
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
                  value={user.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="password" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Dejar en blanco para no cambiar"
                  className="input-field"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="sector" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Sector
                </label>
                <select
                  id="sector"
                  value={user.sector}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="">Selecciona un sector</option>
                  {sectors.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="posicion" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Posición
                </label>
                <select
                  id="posicion"
                  value={user.posicion}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="">Selecciona una posición</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="respondeA" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Responde a
                </label>
                <input
                  id="respondeA"
                  type="text"
                  value={user.respondeA}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="permisos" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Permisos
                </label>
                <select id="permisos" value={user.permisos} onChange={handleChange} className="select-field">
                  <option value="Usuario">Usuario</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
            </div>

            <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>Informes Power BI</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={`powerBi${num}`} style={{ display: "grid", gap: "8px" }}>
                  <label htmlFor={`powerBi${num}`} style={{ fontSize: "14px", fontWeight: "500" }}>
                    Informe Power BI {num}
                  </label>
                  <input
                    id={`powerBi${num}`}
                    type="text"
                    value={user[`powerBi${num}`]}
                    onChange={handleChange}
                    placeholder={`Enlace al informe ${num}`}
                    className="input-field"
                  />
                </div>
              ))}
            </div>

            <button onClick={handleSave} className="button button-primary" style={{ width: "100%", marginTop: "24px" }}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
