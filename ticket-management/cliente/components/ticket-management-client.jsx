"use client"

import { useState } from "react"
import Modal from "@/components/modal"
import Header from "@/components/header"
import CreateTicketForm from "@/components/create-ticket-form"
import { Plus, Search } from "lucide-react"

const tabsData = [
  { value: "todos", label: "Todos" },
  { value: "nuevos", label: "Nuevos" },
  { value: "autorizando", label: "Autorizando" },
  { value: "encurso", label: "En curso" },
  { value: "finalizados", label: "Finalizados" },
  { value: "rechazados", label: "Rechazados" },
]

export default function TicketManagementClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("todos")
  const [selectedSector, setSelectedSector] = useState("")

  // Placeholder for tickets - NOW WITH EXAMPLE DATA including Gestor and Estado
  const allTickets = [
    {
      idIncidencia: "T001",
      solicitante: "Juan Pérez",
      mailContacto: "juan.perez@example.com",
      telefono: "123-456-7890",
      fechaRegistro: "2024-07-20",
      areaUbicacion: "Oficina Gerencia",
      tipoIncidencia: "Falla de equipo",
      prioridad: "Alta",
      tecnicoAsignado: "Carlos Ruiz",
      estadoIncidencia: "Finalizado",
      sector: "Adm&Fin",
    },
    {
      idIncidencia: "T002",
      solicitante: "María García",
      mailContacto: "maria.garcia@example.com",
      telefono: "987-654-3210",
      fechaRegistro: "2024-07-21",
      areaUbicacion: "Cocina",
      tipoIncidencia: "Problema de software",
      prioridad: "Media",
      tecnicoAsignado: "Ana López",
      estadoIncidencia: "En curso",
      sector: "Adm&Fin",
    },
    {
      idIncidencia: "T003",
      solicitante: "Pedro Gómez",
      mailContacto: "pedro.gomez@example.com",
      telefono: "555-123-4567",
      fechaRegistro: "2024-07-22",
      areaUbicacion: "Sala de Servidores",
      tipoIncidencia: "Falla de red",
      prioridad: "Crítica",
      tecnicoAsignado: "Juan Pérez",
      estadoIncidencia: "Nuevo",
      sector: "Sistemas",
    },
    {
      idIncidencia: "T004",
      solicitante: "Laura Díaz",
      mailContacto: "laura.diaz@example.com",
      telefono: "111-222-3333",
      fechaRegistro: "2024-07-23",
      areaUbicacion: "Almacén",
      tipoIncidencia: "Solicitud de compra",
      prioridad: "Baja",
      tecnicoAsignado: "Elena Torres",
      estadoIncidencia: "Autorizando",
      sector: "Compras",
    },
    {
      idIncidencia: "T005",
      solicitante: "Roberto Vega",
      mailContacto: "roberto.vega@example.com",
      telefono: "444-555-6666",
      fechaRegistro: "2024-07-24",
      areaUbicacion: "Oficina Principal",
      tipoIncidencia: "Problema de acceso",
      prioridad: "Alta",
      tecnicoAsignado: "Pedro Sánchez",
      estadoIncidencia: "Rechazado",
      sector: "Sistemas",
    },
    {
      idIncidencia: "T006",
      solicitante: "Sofía Castro",
      mailContacto: "sofia.castro@example.com",
      telefono: "777-888-9999",
      fechaRegistro: "2024-07-25",
      areaUbicacion: "Sala de Juntas",
      tipoIncidencia: "Solicitud de material",
      prioridad: "Media",
      tecnicoAsignado: "Marta Ruiz",
      estadoIncidencia: "Nuevo",
      sector: "Adm&Fin",
    },
  ]

  // Filter tickets based on activeTab and selectedSector
  const filteredTickets = allTickets.filter((ticket) => {
    const matchesTab =
      activeTab === "todos" ||
      (activeTab === "nuevos" && ticket.estadoIncidencia === "Nuevo") ||
      (activeTab === "autorizando" && ticket.estadoIncidencia === "Autorizando") ||
      (activeTab === "encurso" && ticket.estadoIncidencia === "En curso") ||
      (activeTab === "finalizados" && ticket.estadoIncidencia === "Finalizado") ||
      (activeTab === "rechazados" && ticket.estadoIncidencia === "Rechazado")

    const matchesSector = selectedSector === "" || ticket.sector === selectedSector

    return matchesTab && matchesSector
  })

  // Function to get count for each tab
  const getTabCount = (tabValue) => {
    if (tabValue === "todos") {
      return allTickets.length
    }
    return allTickets.filter((ticket) => {
      const matchesStatus =
        (tabValue === "nuevos" && ticket.estadoIncidencia === "Nuevo") ||
        (tabValue === "autorizando" && ticket.estadoIncidencia === "Autorizando") ||
        (tabValue === "encurso" && ticket.estadoIncidencia === "En curso") ||
        (tabValue === "finalizados" && ticket.estadoIncidencia === "Finalizado") ||
        (tabValue === "rechazados" && ticket.estadoIncidencia === "Rechazado")
      return matchesStatus
    }).length
  }

  // Function to get styles for ticket status (for the span inside td)
  const getStatusStyles = (status) => {
    switch (status) {
      case "Nuevo":
        return { backgroundColor: "#e6f7ed", color: "#388e3c", padding: "4px 8px", borderRadius: "12px", fontWeight: "500", display: "inline-block" }
      case "Autorizando":
        return { backgroundColor: "#e0f2f7", color: "#2196f3", padding: "4px 8px", borderRadius: "12px", fontWeight: "500", display: "inline-block" }
      case "En curso":
        return { backgroundColor: "#fff3e0", color: "#f57c00", padding: "4px 8px", borderRadius: "12px", fontWeight: "500", display: "inline-block" }
      case "Finalizado":
        return { backgroundColor: "#f0f0f0", color: "#757575", padding: "4px 8px", borderRadius: "12px", fontWeight: "500", display: "inline-block" }
      case "Rechazado":
        return { backgroundColor: "#ffebee", color: "#d32f2f", padding: "4px 8px", borderRadius: "12px", fontWeight: "500", display: "inline-block" }
      default:
        return { display: "inline-block" }
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header />

      {/* Main Content Area - Adjusted for fixed header */}
      <div style={{ flex: 1, padding: "24px", paddingTop: "80px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#333333" }}>Tickets</h1>
        {/* Tabs */}
        <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "16px", display: "flex", alignItems: "center" }}>
          <button
            className="button button-ghost"
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: "8px 12px",
              height: "auto",
              color: "#4CAF50",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Plus style={{ height: "20px", width: "20px" }} />
          </button>
          <div className="tabs-list">
            {tabsData.map((tab) => (
              <button
                key={tab.value}
                className={`tabs-trigger ${activeTab === tab.value ? "active" : ""}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}{" "}
                <span
                  style={{
                    marginLeft: "4px",
                    backgroundColor: "#e0e0e0",
                    padding: "2px 6px",
                    borderRadius: "9999px",
                    fontSize: "10px",
                  }}
                >
                  {getTabCount(tab.value)}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Filters */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Buscar..."
              className="input-field"
              style={{ paddingRight: "40px", width: "256px", height: "36px" }}
            />
            <button
              className="button button-ghost"
              style={{ position: "absolute", right: "0", top: "0", height: "100%", padding: "0 8px" }}
            >
              <Search style={{ height: "16px", width: "16px" }} />
            </button>
          </div>
          <select
            className="select-field"
            style={{ width: "192px", height: "36px" }}
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value="">Todos los sectores</option>
            <option value="Adm&Fin">Adm&Fin</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Compras">Compras</option>
          </select>
          <div className="switch-container">
            <input type="checkbox" id="team-tickets" className="switch-input" />
            <label htmlFor="team-tickets" style={{ fontSize: "14px", color: "#333333" }}>
              Ver tickets de mi equipo
            </label>
          </div>
          <div className="switch-container">
            <input type="checkbox" id="pending" className="switch-input" />
            <label htmlFor="pending" style={{ fontSize: "14px", color: "#333333" }}>
              Ver pendientes
            </label>
          </div>
        </div>
        {/* Table */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Sector</th>
                <th>Solicitante</th>
                <th>Gestor</th>
                <th>Estado</th>
                <th>Fecha de Registro</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.length === 0 ? (
                <tr>
                  <td colSpan={6} className="table-empty-message">
                    No hay tickets disponibles para este sector.
                  </td>
                </tr>
              ) : (
                filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.idIncidencia}
                    onClick={() => {
                      window.location.href = `/tickets/${ticket.idIncidencia}`
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{ticket.idIncidencia}</td>
                    <td>{ticket.sector}</td>
                    <td>{ticket.solicitante}</td>
                    <td>{ticket.tecnicoAsignado}</td>
                    <td>
                      <span style={getStatusStyles(ticket.estadoIncidencia)}>
                        {ticket.estadoIncidencia}
                      </span>
                    </td>
                    <td>{ticket.fechaRegistro}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* New Ticket Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Crear nuevo Ticket">
        <CreateTicketForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  )
}
