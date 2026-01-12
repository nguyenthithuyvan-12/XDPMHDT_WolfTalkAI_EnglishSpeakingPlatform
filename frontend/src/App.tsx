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

function App() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  return (
    <Router>
      {token ? (
        <Routes>
          {/* Placement Test Routes - Full Screen without Sidebar */}
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

          {/* Alphabet Quiz - Full Screen without Sidebar */}
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
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
