"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Search, Plus, Pencil, Trash2 } from 'lucide-react'
import { useRouter } from "next/navigation"
import Modal from "@/components/modal" // Import the Modal component

export default function AjustesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("usuarios")

  // Placeholder data for users
  const users = [
    { id: "1", nombre: "Juan Pérez", sector: "Operaciones", puesto: "Analista" },
    { id: "2", nombre: "María García", sector: "Administración", puesto: "Contador" },
    { id: "3", nombre: "Carlos López", sector: "Sistemas", puesto: "Desarrollador" },
    { id: "4", nombre: "Ana Martínez", sector: "Recursos Humanos", puesto: "Especialista RRHH" },
  ]

  // State for Sectors and Positions lists
  const [sectorsList, setSectorsList] = useState([
    { id: "s1", name: "Sistemas" },
    { id: "s2", name: "Operación" },
    { id: "s3", name: "RRHH" },
    { id: "s4", name: "Comercial" },
    { id: "s5", name: "Adm&Fin" },
    { id: "s6", name: "Dirección" },
  ])

  const [positionsList, setPositionsList] = useState([
    { id: "p1", name: "CEO" },
    { id: "p2", name: "CEO Assistcargo" },
    { id: "p3", name: "CFO" },
    { id: "p4", name: "Director Operación" },
    { id: "p5", name: "Gerente Aplicaciones" },
    { id: "p6", name: "Gerente Comercial" },
    { id: "p7", name: "Gerente Operaciones" },
    { id: "p8", name: "Gerente RRHH" },
    { id: "p9", name: "Gerente Sistemas" },
    { id: "p10", name: "Gerente Técnico Comercial" },
    { id: "p11", name: "Jefe Administración" },
    { id: "p12", name: "Jefe Custodia Móvil" },
    { id: "p13", name: "Jefe Dispositivos Móviles" },
    { id: "p14", name: "Jefe Operaciones" },
    { id: "p15", name: "Jefe SAC" },
    { id: "p16", name: "Jefe Técnico y Calidad" },
    { id: "p17", name: "Líder Operaciones" },
    { id: "p18", name: "Operador de Cuenta" },
    { id: "p19", name: "Operador de Monitoreo" },
    { id: "p20", name: "Presidente" },
    { id: "p21", name: "Responsable área integraciones GPS y Gestión de Datos Operaciones" },
    { id: "p22", name: "Supervisor" },
  ])

  // New states for Categories and Subcategories lists
  const [categoriesList, setCategoriesList] = useState([
    { id: "c1", name: "Incidencia" },
    { id: "c2", name: "Compra" },
  ])

  const [subcategoriesList, setSubcategoriesList] = useState([
    { id: "sc1", name: "Insumos", categoryId: "c2" },
    { id: "sc2", name: "Artículos", categoryId: "c2" },
    { id: "sc3", name: "Otros", categoryId: "c2" },
  ])

  // Modal states
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false)
  const [modalType, setModalType] = useState("") // 'sector', 'position', 'category', or 'subcategory'
  const [editingItem, setEditingItem] = useState(null) // Item being edited (null for adding)
  const [newItemName, setNewItemName] = useState("")
  const [newParentCategoryId, setNewParentCategoryId] = useState("") // For subcategories

  const handleEditUser = (userId) => {
    router.push(`/ajustes/usuarios/${userId}`)
  }

  const handleDeleteUser = (userId) => {
    console.log(`Eliminar usuario con ID: ${userId}`)
    // Implement actual delete logic here
  }

  // Functions for general list management (Sectors, Positions, Categories, Subcategories)
  const openAddModal = (type) => {
    setModalType(type)
    setEditingItem(null)
    setNewItemName("")
    setNewParentCategoryId("") // Reset for new item
    setIsAddEditModalOpen(true)
  }

  const openEditModal = (type, item) => {
    setModalType(type)
    setEditingItem(item)
    setNewItemName(item.name)
    setNewParentCategoryId(item.categoryId || "") // Set parent category if exists
    setIsAddEditModalOpen(true)
  }

  const closeModal = () => {
    setIsAddEditModalOpen(false)
    setModalType("")
    setEditingItem(null)
    setNewItemName("")
    setNewParentCategoryId("")
  }

  const handleSaveItem = () => {
    if (!newItemName.trim()) return // Don't save empty names

    if (modalType === "sector") {
      if (editingItem) {
        setSectorsList(sectorsList.map(s => s.id === editingItem.id ? { ...s, name: newItemName } : s))
        console.log(`Sector actualizado: ${newItemName}`)
      } else {
        const newId = `s${sectorsList.length + 1}`
        setSectorsList([...sectorsList, { id: newId, name: newItemName }])
        console.log(`Sector agregado: ${newItemName}`)
      }
    } else if (modalType === "position") {
      if (editingItem) {
        setPositionsList(positionsList.map(p => p.id === editingItem.id ? { ...p, name: newItemName } : p))
        console.log(`Posición actualizada: ${newItemName}`)
      } else {
        const newId = `p${positionsList.length + 1}`
        setPositionsList([...positionsList, { id: newId, name: newItemName }])
        console.log(`Posición agregada: ${newItemName}`)
      }
    } else if (modalType === "category") {
      if (editingItem) {
        setCategoriesList(categoriesList.map(c => c.id === editingItem.id ? { ...c, name: newItemName } : c))
        console.log(`Categoría actualizada: ${newItemName}`)
      } else {
        const newId = `c${categoriesList.length + 1}`
        setCategoriesList([...categoriesList, { id: newId, name: newItemName }])
        console.log(`Categoría agregada: ${newItemName}`)
      }
    } else if (modalType === "subcategory") {
      if (!newParentCategoryId.trim()) {
        alert("Por favor, introduce el ID de la Categoría Padre para la subcategoría.")
        return
      }
      if (editingItem) {
        setSubcategoriesList(subcategoriesList.map(sc => sc.id === editingItem.id ? { ...sc, name: newItemName, categoryId: newParentCategoryId } : sc))
        console.log(`Subcategoría actualizada: ${newItemName} (Categoría Padre: ${newParentCategoryId})`)
      } else {
        const newId = `sc${subcategoriesList.length + 1}`
        setSubcategoriesList([...subcategoriesList, { id: newId, name: newItemName, categoryId: newParentCategoryId }])
        console.log(`Subcategoría agregada: ${newItemName} (Categoría Padre: ${newParentCategoryId})`)
      }
    }
    closeModal()
  }

  const handleDeleteItem = (type, id) => {
    if (confirm(`¿Estás seguro de que quieres eliminar este ${type}?`)) {
      if (type === "sector") {
        setSectorsList(sectorsList.filter(s => s.id !== id))
        console.log(`Sector eliminado con ID: ${id}`)
      } else if (type === "position") {
        setPositionsList(positionsList.filter(p => p.id !== id))
        console.log(`Posición eliminada con ID: ${id}`)
      } else if (type === "category") {
        setCategoriesList(categoriesList.filter(c => c.id !== id))
        // Also remove subcategories associated with this category
        setSubcategoriesList(subcategoriesList.filter(sc => sc.categoryId !== id))
        console.log(`Categoría eliminada con ID: ${id}`)
      } else if (type === "subcategory") {
        setSubcategoriesList(subcategoriesList.filter(sc => sc.id !== id))
        console.log(`Subcategoría eliminada con ID: ${id}`)
      }
    }
  }

  // Helper to get category name from ID
  const getCategoryName = (categoryId) => {
    const category = categoriesList.find(c => c.id === categoryId);
    return category ? category.name : "Desconocida";
  };

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
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#333333" }}>
          Ajustes del Sistema
        </h1>

        {/* Tabs for Ajustes */}
        <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "24px", display: "flex" }}>
          <div className="tabs-list">
            <button
              className={`tabs-trigger ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
            >
              General
            </button>
            <button
              className={`tabs-trigger ${activeTab === "tickets" ? "active" : ""}`}
              onClick={() => setActiveTab("tickets")}
            >
              Tickets
            </button>
            <button
              className={`tabs-trigger ${activeTab === "usuarios" ? "active" : ""}`}
              onClick={() => setActiveTab("usuarios")}
            >
              Usuarios
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="card" style={{ padding: "24px" }}>
          {activeTab === "general" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>Configuración General</h2>

              {/* Sectors Management */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Sectores</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("sector")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Sector
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre del Sector</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sectorsList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay sectores disponibles.
                          </td>
                        </tr>
                      ) : (
                        sectorsList.map((sector) => (
                          <tr key={sector.id}>
                            <td>{sector.name}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("sector", sector)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${sector.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                                <button
                                  className="button button-ghost"
                                  onClick={() => handleDeleteItem("sector", sector.id)}
                                  style={{ padding: "6px", minWidth: "unset", color: "#ef4444" }}
                                  aria-label={`Eliminar ${sector.name}`}
                                >
                                  <Trash2 style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Positions Management */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Posiciones</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("position")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Posición
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Posición</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {positionsList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay posiciones disponibles.
                          </td>
                        </tr>
                      ) : (
                        positionsList.map((position) => (
                          <tr key={position.id}>
                            <td>{position.name}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("position", position)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${position.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                                <button
                                  className="button button-ghost"
                                  onClick={() => handleDeleteItem("position", position.id)}
                                  style={{ padding: "6px", minWidth: "unset", color: "#ef4444" }}
                                  aria-label={`Eliminar ${position.name}`}
                                >
                                  <Trash2 style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tickets" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>Configuración de Tickets</h2>

              {/* Categories Management */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Categorías</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("category")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Categoría
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Categoría</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoriesList.length === 0 ? (
                        <tr>
                          <td colSpan={2} className="table-empty-message">
                            No hay categorías disponibles.
                          </td>
                        </tr>
                      ) : (
                        categoriesList.map((category) => (
                          <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("category", category)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${category.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                                <button
                                  className="button button-ghost"
                                  onClick={() => handleDeleteItem("category", category.id)}
                                  style={{ padding: "6px", minWidth: "unset", color: "#ef4444" }}
                                  aria-label={`Eliminar ${category.name}`}
                                >
                                  <Trash2 style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Subcategories Management */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Subcategorías</h3>
                  <button
                    className="button button-primary"
                    onClick={() => openAddModal("subcategory")}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px" }}
                  >
                    <Plus style={{ height: "16px", width: "16px" }} />
                    Agregar Subcategoría
                  </button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre de la Subcategoría</th>
                        <th>Categoría Padre</th>
                        <th style={{ width: "120px" }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcategoriesList.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="table-empty-message">
                            No hay subcategorías disponibles.
                          </td>
                        </tr>
                      ) : (
                        subcategoriesList.map((subcategory) => (
                          <tr key={subcategory.id}>
                            <td>{subcategory.name}</td>
                            <td>{getCategoryName(subcategory.categoryId)}</td> {/* Display parent category name */}
                            <td>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                  className="button button-ghost"
                                  onClick={() => openEditModal("subcategory", subcategory)}
                                  style={{ padding: "6px", minWidth: "unset" }}
                                  aria-label={`Editar ${subcategory.name}`}
                                >
                                  <Pencil style={{ height: "16px", width: "16px" }} />
                                </button>
                                <button
                                  className="button button-ghost"
                                  onClick={() => handleDeleteItem("subcategory", subcategory.id)}
                                  style={{ padding: "6px", minWidth: "unset", color: "#ef4444" }}
                                  aria-label={`Eliminar ${subcategory.name}`}
                                >
                                  <Trash2 style={{ height: "16px", width: "16px" }} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "usuarios" && (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>Gestión de Usuarios</h2>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ position: "relative", flexGrow: 1, maxWidth: "300px" }}>
                  <input
                    type="text"
                    placeholder="Buscar usuario..."
                    className="input-field"
                    style={{ paddingRight: "40px", width: "100%", height: "36px" }}
                  />
                  <button
                    className="button button-ghost"
                    style={{ position: "absolute", right: "0", top: "0", height: "100%", padding: "0 8px" }}
                  >
                    <Search style={{ height: "16px", width: "16px" }} />
                  </button>
                </div>
                <button className="button button-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Plus style={{ height: "20px", width: "20px" }} />
                  Agregar Usuario
                </button>
              </div>

              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Sector</th>
                      <th>Puesto</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="table-empty-message">
                          No hay usuarios disponibles.
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.nombre}</td>
                          <td>{user.sector}</td>
                          <td>{user.puesto}</td>
                          <td>
                            <div style={{ display: "flex", gap: "8px" }}>
                              <button
                                className="button button-ghost"
                                onClick={() => handleEditUser(user.id)}
                                style={{ padding: "6px", minWidth: "unset" }}
                                aria-label={`Editar ${user.nombre}`}
                              >
                                <Pencil style={{ height: "16px", width: "16px" }} />
                              </button>
                              <button
                                className="button button-ghost"
                                onClick={() => handleDeleteUser(user.id)}
                                style={{ padding: "6px", minWidth: "unset", color: "#ef4444" }}
                                aria-label={`Eliminar ${user.nombre}`}
                              >
                                <Trash2 style={{ height: "16px", width: "16px" }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Sector/Position/Category/Subcategory Modal */}
      <Modal
        isOpen={isAddEditModalOpen}
        onClose={closeModal}
        title={editingItem ? `Editar ${modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}` : `Agregar ${modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}`}
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSaveItem(); }}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="itemName" style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>
              Nombre del {modalType === 'sector' ? 'Sector' : modalType === 'position' ? 'Posición' : modalType === 'category' ? 'Categoría' : 'Subcategoría'}
            </label>
            <input
              id="itemName"
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="input-field"
              placeholder={`Introduce el nombre del ${modalType === 'sector' ? 'sector' : modalType === 'position' ? 'posición' : modalType === 'category' ? 'categoría' : 'subcategoría'}`}
              required
            />
          </div>

          {modalType === "subcategory" && (
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="parentCategoryId" style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>
                ID de Categoría Padre
              </label>
              <input
                id="parentCategoryId"
                type="text"
                value={newParentCategoryId}
                onChange={(e) => setNewParentCategoryId(e.target.value)}
                className="input-field"
                placeholder="Ej: c1 (Incidencia), c2 (Compra)"
                required
              />
              <p style={{ fontSize: "12px", color: "#757575", marginTop: "4px" }}>
                Para una mejor experiencia, este campo debería ser un selector de categorías existentes.
              </p>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button type="button" onClick={closeModal} className="button button-ghost">
              Cancelar
            </button>
            <button type="submit" className="button button-primary">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
