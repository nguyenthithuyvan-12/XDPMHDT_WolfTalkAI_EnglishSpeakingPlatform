import { useState, useEffect } from "react";
import { apiClient } from "../services/api";

interface HealthResponse {
  status: string;
  message: string;
  timestamp: number;
}

interface HelloResponse {
  message: string;
  version: string;
}

export const HealthCheckPage = () => {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...");
  const [backendMessage, setBackendMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await apiClient.get<HealthResponse>("/health");
      setBackendStatus(data.status);
      setBackendMessage(data.message);
    } catch (err) {
      setError("❌ Backend not connected");
      setBackendStatus("DOWN");
    } finally {
      setLoading(false);
    }
  };

  const getHello = async () => {
    try {
      setError("");
      const data = await apiClient.get<HelloResponse>("/hello");
      setBackendMessage(data.message);
    } catch (err) {
      setError("Error fetching hello message");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Backend Connection Status</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>Backend Status</h2>
        <p>
          Status:{" "}
          <strong
            style={{
              color: backendStatus === "UP" ? "green" : "red",
              fontSize: "18px",
            }}
          >
            {backendStatus}
          </strong>
        </p>
        <p>{backendMessage}</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          onClick={checkBackendHealth}
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {loading ? "Checking..." : "Check Backend Health"}
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <button
          onClick={getHello}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Get Hello Message from Backend
        </button>
      </div>
    </div>
  );
};
