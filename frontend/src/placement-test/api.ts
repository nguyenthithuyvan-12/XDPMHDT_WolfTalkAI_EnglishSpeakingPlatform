import axios, { type InternalAxiosRequestConfig } from "axios";
import type { PlacementTest, PlacementTestStepRequest } from "./types";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Set to true if you need to send cookies/credentials
});

// Add token to requests
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const placementTestService = {
  startTest: async (): Promise<PlacementTest> => {
    const response = await api.post("/api/placement-test/start");
    return response.data;
  },

  updateStep: async (
    request: PlacementTestStepRequest
  ): Promise<PlacementTest> => {
    const response = await api.put("/api/placement-test/update", request);
    return response.data;
  },

  getCurrentTest: async (): Promise<PlacementTest> => {
    const response = await api.get("/api/placement-test/current");
    return response.data;
  },

  hasCompletedTest: async (): Promise<boolean> => {
    const response = await api.get("/api/placement-test/has-completed");
    return response.data.hasCompleted;
  },
};
