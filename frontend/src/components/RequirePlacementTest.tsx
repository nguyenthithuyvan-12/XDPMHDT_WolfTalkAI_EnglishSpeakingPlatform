import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { placementTestService } from "../placement-test/api";

interface RequirePlacementTestProps {
  children: React.ReactNode;
}

/**
 * Component to protect routes that require placement test completion
 * Redirects to placement test if user hasn't completed it yet
 */
const RequirePlacementTest: React.FC<RequirePlacementTestProps> = ({
  children,
}) => {
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const checkPlacementTest = async () => {
      try {
        const completed = await placementTestService.hasCompletedTest();
        setHasCompleted(completed);
      } catch (error) {
        console.error("Failed to check placement test status:", error);
        // If check fails, assume not completed and redirect to placement test
        setHasCompleted(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkPlacementTest();
  }, []);

  if (isChecking) {
    // Show loading state while checking
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

  // If placement test not completed, redirect to placement test
  if (!hasCompleted) {
    return <Navigate to="/placement-test" state={{ from: location }} replace />;
  }

  // User has completed placement test, render the protected content
  return <>{children}</>;
};

export default RequirePlacementTest;
