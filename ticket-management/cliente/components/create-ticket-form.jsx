"use client"

import { useState, useRef } from "react"

export default function CreateTicketForm({ onClose }) {
  const [categoria, setCategoria] = useState("")
  const [subcategoria, setSubcategoria] = useState("")
  const [valorAproximado, setValorAproximado] = useState("")
  const [linkArticulo, setLinkArticulo] = useState("")
  const [archivoAdjunto, setArchivoAdjunto] = useState(null)

  const fileInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado!", {
      categoria,
      subcategoria,
      valorAproximado,
      linkArticulo,
      archivoAdjunto: archivoAdjunto ? archivoAdjunto.name : "Ninguno",
    })
    onClose && onClose()
  }

  const handleCategoryChange = (e) => {
    setCategoria(e.target.value)
    // Reset subcategory, value, link, and file if category changes
    if (e.target.value !== "compra") {
      setSubcategoria("")
      setValorAproximado("")
      setLinkArticulo("")
      setArchivoAdjunto(null)
    }
  }

  const handleFileChange = (e) => {
    setArchivoAdjunto(e.target.files[0])
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", padding: "16px 0" }}
    >
      {/* Category Field */}
      <div style={{ marginBottom: "8px" }}>
        <label
          htmlFor="categoria"
          style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
        >
          Categoría
        </label>
        <select
          id="categoria"
          value={categoria}
          onChange={handleCategoryChange}
          className="select-field"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="incidencia">Incidencia</option>
          <option value="compra">Compra</option>
        </select>
      </div>

      {/* Conditionally rendered fields for "Compra" category */}
      {categoria === "compra" && (
        <>
          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="subcategoria"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Subcategoría
            </label>
            <select
              id="subcategoria"
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
              className="select-field"
              required
            >
              <option value="">Selecciona una subcategoría</option>
              <option value="insumos">Insumos</option>
              <option value="articulos">Artículos</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="valorAproximado"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Valor aproximado
            </label>
            <input
              id="valorAproximado"
              type="number"
              value={valorAproximado}
              onChange={(e) => setValorAproximado(e.target.value)}
              placeholder="Introduce el valor aproximado"
              className="input-field"
              required
            />
          </div>

          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="linkArticulo"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Link del artículo
            </label>
            <input
              id="linkArticulo"
              type="url"
              value={linkArticulo}
              onChange={(e) => setLinkArticulo(e.target.value)}
              placeholder="Introduce el enlace del artículo"
              className="input-field"
            />
          </div>

          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="archivoAdjunto"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Archivo adjunto
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              type="button"
              onClick={triggerFileInput}
              className="button button-ghost"
              style={{
                border: "1px solid #e0e0e0",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {archivoAdjunto ? archivoAdjunto.name : "Seleccionar archivo..."}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            </button>
          </div>
        </>
      )}

      {/* Fields always present */}
      <div style={{ marginBottom: "8px" }}>
        <label
          htmlFor="solicitante"
          style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
        >
          Solicitante
        </label>
        <input id="solicitante" type="text" placeholder="Introduce el nombre del solicitante" className="input-field" />
      </div>
      <div style={{ marginBottom: "8px" }}>
        <label
          htmlFor="mailContacto"
          style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
        >
          Correo de contacto
        </label>
        <input id="mailContacto" type="email" placeholder="Introduce el correo de contacto" className="input-field" />
      </div>
      <div style={{ marginBottom: "8px" }}>
        <label
          htmlFor="telefono"
          style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
        >
          Teléfono
        </label>
        <input id="telefono" type="tel" placeholder="Introduce el número de teléfono" className="input-field" />
      </div>

      {/* Conditionally rendered fields for "Incidencia" category */}
      {categoria === "incidencia" && (
        <>
          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="areaUbicacion"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Área/Ubicación
            </label>
            <select id="areaUbicacion" className="select-field">
              <option value="">Selecciona una ubicación</option>
              <option value="cocina">COCINA</option>
              <option value="bano-mujeres">BAÑO MUJERES</option>
              <option value="bano-hombres">BAÑO HOMBRES</option>
              <option value="bano-sala-reuniones">BAÑO SALA DE REUNIONES</option>
              <option value="generador-terrazas">GENERADOR - TERRAZA</option>
              <option value="sala-servidores">SALA DE SERVIDORES</option>
              <option value="comedor">COMEDOR</option>
              <option value="oficina-gerencia">OFICINA GERENCIA</option>
              <option value="oficina-direccion">OFICINA DIRECCION</option>
              <option value="oficina-area-operaciones">OFICINA AREA OPERACIONES</option>
              <option value="oficina-area-staff">OFICINA AREA STAFF</option>
              <option value="oficina-dispositivos">OFICINA DISPOSITIVOS</option>
            </select>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="prioridad"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
            >
              Prioridad
            </label>
            <select id="prioridad" className="select-field">
              <option value="">Selecciona una prioridad</option>
              <option
                value="critica"
                title="Emergencias que afectan gravemente la operación y requieren atención inmediata. Si no se resuelven rápidamente, pueden tener un impacto significativo en la seguridad o en el funcionamiento de la empresa."
              >
                Crítica
              </option>
              <option
                value="alta"
                title="Incidencias que afectan la operación o podrían causar interrupciones si no se atienden en breve. Estas requieren atención rápida para evitar un impacto mayor en las operaciones."
              >
                Alta
              </option>
              <option
                value="media"
                title="Problemas que deben resolverse en un plazo razonable para evitar que se conviertan en un problema mayor, aunque no interrumpen las operaciones en el momento."
              >
                Media
              </option>
              <option
                value="baja"
                title="Incidencias menores que no afectan directamente la operación. Estas son tareas que pueden programarse para ser atendidas sin prisa."
              >
                Baja
              </option>
            </select>
          </div>
        </>
      )}

      <div style={{ marginBottom: "8px", gridColumn: "1 / -1" }}>
        <label
          htmlFor="descripcion"
          style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}
        >
          Descripción
        </label>
        <textarea
          id="descripcion"
          placeholder="Describe la incidencia"
          className="textarea-field"
          style={{ minHeight: "100px" }}
        />
      </div>
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
        <button type="submit" className="button button-primary">
          Crear Ticket
        </button>
      </div>
    </form>
  )
}
