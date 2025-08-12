"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"

export default function InformesPage() {
  const [userReports, setUserReports] = useState([])
  const [activeTab, setActiveTab] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user's Power BI reports
    // In a real application, this would come from the authenticated user's profile
    const fetchUserPowerBIReports = async () => {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay

      // Dummy data for a user with Power BI reports
      const dummyUser = {
        id: "1",
        nombre: "Juan Pérez",
        powerBi1: "https://app.powerbi.com/view?r=eyJrIjoiN2I3NjQxOGUtNmFmYy00ZTVjLTlhMjktYzAxNDk2Y2UxN2Y0IiwidCI6IjI3MTI4ZmZkLTI1NjEtNGEwYy1iNzRiLWM5YWY5ZWZjNjM5YiIsImMiOjR9",
        powerBi2: "", // No link for this one
        powerBi3: "https://app.powerbi.com/view?r=eyJrIjoiN2I3NjQxOGUtNmFmYy00ZTVjLTlhMjktYzAxNDk2Y2UxN2Y0IiwidCI6IjI3MTI4ZmZkLTI1NjEtNGEwYy1iNzRiLWM5YWY5ZWZjNjM5YiIsImMiOjR9", // Another example link
        powerBi4: "",
        powerBi5: "",
      }

      const reports = []
      if (dummyUser.powerBi1) reports.push({ name: "Informe BI 1", url: dummyUser.powerBi1 })
      if (dummyUser.powerBi2) reports.push({ name: "Informe BI 2", url: dummyUser.powerBi2 })
      if (dummyUser.powerBi3) reports.push({ name: "Informe BI 3", url: dummyUser.powerBi3 })
      if (dummyUser.powerBi4) reports.push({ name: "Informe BI 4", url: dummyUser.powerBi4 })
      if (dummyUser.powerBi5) reports.push({ name: "Informe BI 5", url: dummyUser.powerBi5 })

      setUserReports(reports)
      if (reports.length > 0) {
        setActiveTab(reports[0].name) // Set the first report as active tab
      }
      setIsLoading(false)
    }

    fetchUserPowerBIReports()
  }, [])

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
          paddingTop: "80px", // Adjusted for fixed header
          maxWidth: "1200px", // Max width for content
          margin: "0 auto", // Center content
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#333333" }}>
          Informes
        </h1>

        {isLoading ? (
          <div className="card" style={{ padding: "24px", textAlign: "center" }}>
            Cargando informes...
          </div>
        ) : userReports.length === 0 ? (
          <div className="card" style={{ padding: "24px", textAlign: "center" }}>
            No hay informes de Power BI configurados para este usuario.
          </div>
        ) : (
          <>
            {/* Tabs for Power BI Reports */}
            <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "24px", display: "flex", overflowX: "auto" }}>
              <div className="tabs-list">
                {userReports.map((report) => (
                  <button
                    key={report.name}
                    className={`tabs-trigger ${activeTab === report.name ? "active" : ""}`}
                    onClick={() => setActiveTab(report.name)}
                  >
                    {report.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content - Power BI Iframes */}
            <div className="card" style={{ padding: "0", overflow: "hidden" }}>
              {userReports.map((report) => (
                <div
                  key={report.name}
                  style={{
                    display: activeTab === report.name ? "block" : "none",
                    width: "100%",
                    height: "700px", // Fixed height for the iframe container
                  }}
                >
                  <iframe
                    title={report.name}
                    width="100%"
                    height="100%"
                    src={report.url}
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ border: "none" }}
                  ></iframe>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
