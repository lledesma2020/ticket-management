"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TicketDetailPage({ params }) {
  const router = useRouter()
  const { id } = params // Get ticket ID from URL parameters
  const [ticket, setTicket] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching ticket data based on ID
    const fetchTicketData = async () => {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay

      // Dummy ticket data (replace with actual data fetching from your backend)
      const dummyTickets = [
        {
          idIncidencia: "T001",
          solicitante: "Juan Pérez",
          mailContacto: "juan.perez@example.com",
          telefono: "123-456-7890",
          fechaRegistro: "2024-07-20",
          areaUbicacion: "Oficina Gerencia",
          tipoIncidencia: "Falla de equipo",
          descripcion: "La impresora no enciende.",
          prioridad: "Alta",
          sector: "Administración",
          tecnicoAsignado: "Carlos Ruiz",
          accionCorrectiva: "Reemplazo de fusor",
          proveedor: "Tech Solutions",
          nFacturaTicket: "INV-2024-001",
          costoAsociado: "50.00",
          estadoIncidencia: "Finalizado",
          fechaResolucion: "2024-07-22",
        },
        {
          idIncidencia: "T002",
          solicitante: "María García",
          mailContacto: "maria.garcia@example.com",
          telefono: "987-654-3210",
          fechaRegistro: "2024-07-21",
          areaUbicacion: "Cocina",
          tipoIncidencia: "Problema de software",
          descripcion: "El software de contabilidad se cierra inesperadamente.",
          prioridad: "Media",
          sector: "Finanzas",
          tecnicoAsignado: "Ana López",
          accionCorrectiva: "Reinstalación de software",
          proveedor: "N/A",
          nFacturaTicket: "N/A",
          costoAsociado: "0.00",
          estadoIncidencia: "En curso",
          fechaResolucion: "",
        },
        {
          idIncidencia: "T003",
          solicitante: "Pedro Gómez",
          mailContacto: "pedro.gomez@example.com",
          telefono: "555-123-4567",
          fechaRegistro: "2024-07-22",
          areaUbicacion: "Sala de Servidores",
          tipoIncidencia: "Falla de red",
          descripcion: "No hay conexión a internet en la sala de servidores.",
          prioridad: "Crítica",
          sector: "Sistemas",
          tecnicoAsignado: "Juan Pérez",
          accionCorrectiva: "Reinicio de router principal",
          proveedor: "ISP Global",
          nFacturaTicket: "SVC-2024-005",
          costoAsociado: "0.00",
          estadoIncidencia: "Nuevo",
          fechaResolucion: "",
        },
      ]

      const foundTicket = dummyTickets.find(t => t.idIncidencia === id)
      if (foundTicket) {
        setTicket(foundTicket)
      } else {
        console.error(`Ticket con ID ${id} no encontrado.`)
        router.push("/tickets") // Redirect if ticket not found
      }
      setIsLoading(false)
    }

    fetchTicketData()
  }, [id, router])

  if (isLoading) {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <Header />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
          Cargando detalles del ticket...
        </div>
      </div>
    )
  }

  if (!ticket) {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <Header />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
          Ticket no encontrado.
        </div>
      </div>
    )
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
          padding: "24px",
          paddingTop: "80px",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="card" style={{ padding: "24px" }}>
          <div className="card-header" style={{ textAlign: "left" }}>
            <Link href="/tickets" style={{ textDecoration: "none", color: "#4CAF50", fontSize: "14px", display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
              Volver al Listado de Tickets
            </Link>
            <h2 className="card-title">Detalle del Ticket: {ticket.idIncidencia}</h2>
            <p className="card-description">Información completa sobre el ticket.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Información General</h3>
              <div style={{ display: "grid", gap: "10px" }}>
                <p><strong>Solicitante:</strong> {ticket.solicitante}</p>
                <p><strong>Mail de contacto:</strong> {ticket.mailContacto}</p>
                <p><strong>Teléfono:</strong> {ticket.telefono}</p>
                <p><strong>Fecha de Registro:</strong> {ticket.fechaRegistro}</p>
                <p><strong>Área/Ubicación:</strong> {ticket.areaUbicacion}</p>
                <p><strong>Tipo de Incidencia:</strong> {ticket.tipoIncidencia}</p>
                <p><strong>Prioridad:</strong> {ticket.prioridad}</p>
                <p><strong>Estado:</strong> {ticket.estadoIncidencia}</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Detalles Adicionales</h3>
              <div style={{ display: "grid", gap: "10px" }}>
                <p><strong>Descripción:</strong> {ticket.descripcion}</p>
                <p><strong>Sector:</strong> {ticket.sector}</p>
                <p><strong>Técnico Asignado:</strong> {ticket.tecnicoAsignado}</p>
                <p><strong>Acción Correctiva:</strong> {ticket.accionCorrectiva}</p>
                <p><strong>Proveedor:</strong> {ticket.proveedor}</p>
                <p><strong>N Factura / Ticket:</strong> {ticket.nFacturaTicket}</p>
                <p><strong>Costo Asociado:</strong> ${ticket.costoAsociado}</p>
                <p><strong>Fecha de Resolución:</strong> {ticket.fechaResolucion || "Pendiente"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
