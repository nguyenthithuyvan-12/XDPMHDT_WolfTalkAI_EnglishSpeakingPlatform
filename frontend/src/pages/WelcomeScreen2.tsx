import React from "react";
import "../styles/WelcomeScreen.css";

interface WelcomeScreen2Props {
  onNext: () => void;
}

const WelcomeScreen2: React.FC<WelcomeScreen2Props> = ({ onNext }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-character">
          <dotlottie-wc
            src="https://lottie.host/411acd15-dcf8-4718-be63-792dfa66fb6d/C2vadCAOrZ.lottie"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            mode="forward"
            loop
            autoplay
          />
        </div>
        <div className="welcome-speech-bubble">
          <p className="welcome-text">Cùng bắt đầu bước tiếp ngôn ngữ nào!</p>
        </div>
      </div>
      <div className="welcome-footer">
        <button className="welcome-button" onClick={onNext}>
          TIẾP TỤC
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen2;
