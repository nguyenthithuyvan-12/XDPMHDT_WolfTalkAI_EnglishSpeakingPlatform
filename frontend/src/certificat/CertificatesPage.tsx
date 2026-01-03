import React from "react";
import Sidebar from "../components/Sidebar";
import "./CertificatesPage.css";

const CertificatesPage: React.FC = () => {
  return (
    <div className="certificates-main">
      <Sidebar />
      <main className="certificates-content">
        <h1>Chứng Chỉ</h1>
        <p>Danh sách chứng chỉ của bạn sẽ xuất hiện ở đây.</p>
      </main>
    </div>
  );
};

export default CertificatesPage;
