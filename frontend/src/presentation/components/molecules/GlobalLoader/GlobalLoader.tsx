import React from "react";

/**
 * Global Loading Component
 * Based on the Wolf animation in RequirePlacementTest
 */
export const GlobalLoader: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "400px", // Ensure visibility if container is small
                background: "transparent", // Allow blending or keep #1a1a2e if overlay needed
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
                        animation: "pulse 2s infinite"
                    }}
                >
                    🐺
                </div>
                <p style={{ color: "#9ca3af", fontSize: "1.1rem", fontWeight: 500 }}>Đang tải dữ liệu...</p>
            </div>
            <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
        }
      `}</style>
        </div>
    );
};
