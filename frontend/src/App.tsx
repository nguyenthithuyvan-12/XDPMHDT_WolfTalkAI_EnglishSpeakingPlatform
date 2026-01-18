import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import RequirePlacementTest from "./components/RequirePlacementTest";
import ProfilePage from "./profile/ProfilePage";
import CertificatesPage from "./certificat/CertificatesPage";
import ProgressPage from "./progress/ProgressPage";
import AlphabetPage from "./alphabet/AlphabetPage";
import AlphabetQuiz from "./alphabet/AlphabetQuiz";
import "./App.css";
import DashboardPage from "./dashboard/DashboardPage";
import LandingPage from "./pages/LandingPage";
import {
  PlacementTestLanding,
  PlacementTestSteps,
  PlacementTestComplete,
} from "./placement-test";
import PlacementTestQuestions from "./placement-test/PlacementTestQuestions";
import { AuthProvider, useAuth } from "./presentation/contexts/AuthContext";

function AuthenticatedApp() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#1a1a2e",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🐺
          </div>
          <p>Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {/* Placement Test Routes - Full Screen without Sidebar - Requires Authentication */}
          <Route path="/placement-test" element={<PlacementTestLanding />} />
          <Route
            path="/placement-test/:testId/step/:stepNumber"
            element={<PlacementTestSteps />}
          />
          <Route
            path="/placement-test/:testId/questions"
            element={<PlacementTestQuestions />}
          />
          <Route
            path="/placement-test/:testId/complete"
            element={<PlacementTestComplete />}
          />

          {/* Alphabet Quiz - Full Screen without Sidebar - Requires Authentication */}
          <Route path="/alphabet/quiz" element={<AlphabetQuiz />} />

          {/* Dashboard Routes - With Sidebar - Protected by Placement Test */}
          <Route
            path="/*"
            element={
              <RequirePlacementTest>
                <div className="app-layout">
                  <Sidebar />
                  <main className="main-content">
                    <Routes>
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/alphabet" element={<AlphabetPage />} />
                      <Route
                        path="/certificates"
                        element={<CertificatesPage />}
                      />
                      <Route path="/progress" element={<ProgressPage />} />
                      <Route
                        path="/"
                        element={<Navigate to="/dashboard" replace />}
                      />
                      <Route
                        path="*"
                        element={<Navigate to="/dashboard" replace />}
                      />
                    </Routes>
                  </main>
                </div>
              </RequirePlacementTest>
            }
          />
        </>
      ) : (
        <>
          {/* Public Routes - Not Authenticated */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AuthenticatedApp />
      </AuthProvider>
    </Router>
  );
}

export default App;
