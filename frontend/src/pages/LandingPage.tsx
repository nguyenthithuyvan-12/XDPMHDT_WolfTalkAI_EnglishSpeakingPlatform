import React, { useState } from "react";
import "../styles/LandingPage.css";
import logoWolf from "../assets/wolftalk/logo_wolf.png";
import LanguageSelectionPage from "./LanguageSelectionPage";
import WelcomeScreen1 from "./WelcomeScreen1";
import WelcomeScreen2 from "./WelcomeScreen2";
import LoginPage from "../login/LoginPage";
import SignUp from "../login/SignUp";
import { useNavigate } from "react-router-dom";

type Language = "vi" | "en" | "fr" | "es";

interface TextContent {
  mainTitle: string;
  freeText: string;
  buttonStart: string;
  buttonLogin: string;
  languageLabel: string;
}

const LandingPage: React.FC = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [displayLanguage, setDisplayLanguage] = useState<Language>("vi");
  const [showLanguageSelection, setShowLanguageSelection] = useState(false);
  const [showWelcome1, setShowWelcome1] = useState(false);
  const [showWelcome2, setShowWelcome2] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const navigate = useNavigate();

  const languages = [
    { name: "TIẾNG ANH", flag: "🇺🇸" },
    { name: "TIẾNG PHÁP", flag: "🇫🇷" },
    { name: "TIẾNG SPANISH", flag: "🇪🇸" },
    { name: "TIẾNG ĐỨC", flag: "🇩🇪" },
  ];

  const translations: Record<Language, TextContent> = {
    vi: {
      mainTitle: "Học ngoại ngữ",
      freeText: "miễn phí",
      buttonStart: "BẮT ĐẦU",
      buttonLogin: "TÔI ĐÃ CÓ TÀI KHOẢN",
      languageLabel: "NGÔN NGỮ HIỆN THI:",
    },
    en: {
      mainTitle: "Learn a language",
      freeText: "for free",
      buttonStart: "GET STARTED",
      buttonLogin: "I ALREADY HAVE AN ACCOUNT",
      languageLabel: "DISPLAY LANGUAGE:",
    },
    fr: {
      mainTitle: "Apprenez une langue",
      freeText: "gratuitement",
      buttonStart: "COMMENCER",
      buttonLogin: "J'AI DÉJÀ UN COMPTE",
      languageLabel: "LANGUE D'AFFICHAGE:",
    },
    es: {
      mainTitle: "Aprende un idioma",
      freeText: "de forma gratuita",
      buttonStart: "EMPEZAR",
      buttonLogin: "YA TENGO UNA CUENTA",
      languageLabel: "IDIOMA DE VISUALIZACIÓN:",
    },
  };

  const handlePrevLanguage = () => {
    setCurrentLanguageIndex(
      currentLanguageIndex === 0
        ? languages.length - 1
        : currentLanguageIndex - 1,
    );
  };

  const handleNextLanguage = () => {
    setCurrentLanguageIndex(
      currentLanguageIndex === languages.length - 1
        ? 0
        : currentLanguageIndex + 1,
    );
  };

  const handleDisplayLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = e.target.value as Language;
    setDisplayLanguage(selectedLanguage);
  };

  const content = translations[displayLanguage];

  const handleStartClick = () => {
    setShowLanguageSelection(true);
  };

  const handleBackFromSelection = () => {
    setShowLanguageSelection(false);
  };

  const handleSelectLanguage = (languageId: string) => {
    console.log("Selected language:", languageId);
    setSelectedLanguage(languageId);
    setShowLanguageSelection(false);
    setShowWelcome1(true);
  };

  const handleWelcome1Next = () => {
    setShowWelcome1(false);
    setShowWelcome2(true);
  };

  const handleWelcome2Next = () => {
    setShowWelcome2(false);
    setShowAgeModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };

  const handleSignUpClick = () => {
    setShowLoginModal(false);
    setShowAgeModal(true);
  };

  const handleCloseAge = () => {
    setShowAgeModal(false);
  };

  const handleLoginSuccess = () => {
    // Navigate to dashboard after successful login
    // RequirePlacementTest will check if user needs to take the test
    window.location.href = "/dashboard";
  };

  const handleAgeNext = () => {
    console.log("Age verification completed");
    setShowAgeModal(false);
    // Navigate to dashboard with page reload to update token state
    // RequirePlacementTest will check if user needs to take the test
    window.location.href = "/dashboard";
  };

  if (showLanguageSelection) {
    return (
      <LanguageSelectionPage
        displayLanguage={displayLanguage}
        onBack={handleBackFromSelection}
        onSelectLanguage={handleSelectLanguage}
      />
    );
  }

  if (showWelcome1) {
    return <WelcomeScreen1 onNext={handleWelcome1Next} />;
  }

  if (showWelcome2) {
    return <WelcomeScreen2 onNext={handleWelcome2Next} />;
  }

  if (showLoginModal) {
    return (
      <LoginPage
        displayLanguage={displayLanguage}
        onBack={handleCloseLogin}
        onSignUp={handleSignUpClick}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (showAgeModal) {
    return (
      <SignUp
        displayLanguage={displayLanguage}
        onClose={handleCloseAge}
        onSignUp={handleSignUpClick}
        onNext={handleAgeNext}
        learningLanguage={selectedLanguage}
      />
    );
  }

  return (
    <div className="landing-page">
      {/* Header cố định */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logoWolf} alt="WolfTalk Logo" className="logo-wolf" />
            <span className="logo-text">WolfTalk</span>
          </div>
          <div className="language-selector">
            <label htmlFor="language-select">{content.languageLabel}</label>
            <select
              id="language-select"
              className="language-dropdown"
              aria-label="Chọn ngôn ngữ hiển thị"
              value={displayLanguage}
              onChange={handleDisplayLanguageChange}
            >
              <option value="vi">TIẾNG VIỆT</option>
              <option value="en">TIẾNG ANH</option>
              <option value="fr">TIẾNG PHÁP</option>
              <option value="es">TIẾNG TÂY BAN NHA</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Left side - Illustration */}
          <div className="left-section">
            <div className="illustration">
              <div className="character character-5">
                <dotlottie-wc
                  src="https://lottie.host/411acd15-dcf8-4718-be63-792dfa66fb6d/C2vadCAOrZ.lottie"
                  speed="1"
                  style={{ width: "500px", height: "500px" }}
                  mode="forward"
                  loop
                  autoplay
                ></dotlottie-wc>
              </div>
            </div>
          </div>

          {/* Right side - Text and Buttons */}
          <div className="right-section">
            <h1 className="main-title">
              {content.mainTitle} <br />
              <span className="highlight">{content.freeText}</span>, vui nhộn{" "}
              <br />
              và hiệu quả!
            </h1>

            <div className="button-group">
              <button className="btn btn-primary" onClick={handleStartClick}>
                {content.buttonStart}
              </button>
              <button className="btn btn-secondary" onClick={handleLoginClick}>
                {content.buttonLogin}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Carousel Section */}
      <section className="features-section">
        <div className="features-carousel">
          <button
            className="features-nav-btn prev"
            onClick={handlePrevLanguage}
          >
            ‹
          </button>

          <div className="features-content">
            <div className="features-header">
              <span className="features-flag">
                {languages[currentLanguageIndex].flag}
              </span>
              <span className="features-language">
                {languages[currentLanguageIndex].name}
              </span>
            </div>

            <div className="features-main">
              <div className="features-text">
                <h2 className="features-title">
                  miễn phí. vui nhộn. <br />
                  hiệu quả
                </h2>
                <p className="features-description">
                  Học cùng Duolingo rất vui nhộn,{" "}
                  <strong className="features-highlight">
                    các nghiên cứu đã chứng minh ứng dụng thực sự hiệu quả!
                  </strong>{" "}
                  Các bài học nhỏ gọn sẽ giúp bạn ghi điểm, mở khóa cấp độ mới
                  và luyện tập kỹ năng giao tiếp hữu dụng.
                </p>
              </div>

              <div className="features-illustration">
                <div className="features-device">
                  <div className="device-screen">
                    <div className="device-progress">
                      <div className="progress-bar-filled"></div>
                    </div>
                    <div className="device-avatars">
                      <div className="avatar-item blue">🐱</div>
                      <div className="avatar-item green">🦉</div>
                      <div className="avatar-item orange">🧑</div>
                      <div className="avatar-item brown">👨</div>
                    </div>
                  </div>
                  <div className="device-badge">#1</div>
                </div>
                <div className="features-character">
                  <div className="character-body"></div>
                  <div className="character-ribbon"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="features-nav-btn next"
            onClick={handleNextLanguage}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
