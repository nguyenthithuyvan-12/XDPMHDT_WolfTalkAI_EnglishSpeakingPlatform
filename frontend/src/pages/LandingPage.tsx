import React, { useState } from "react";
import "../styles/LandingPage.css";
import logoWolf from "../assets/wolftalk/logo_wolf.png";
import LanguageSelectionPage from "./LanguageSelectionPage";
import LoginPage from "../login/LoginPage";
import SignUp from "../login/SignUp";

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
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);

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
        : currentLanguageIndex - 1
    );
  };

  const handleNextLanguage = () => {
    setCurrentLanguageIndex(
      currentLanguageIndex === languages.length - 1
        ? 0
        : currentLanguageIndex + 1
    );
  };

  const handleDisplayLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
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
    // TODO: Navigate to learning page or handle language selection
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
    setShowAgeModal(true);
  };

  const handleAgeNext = () => {
    console.log("Age verification completed");
    setShowAgeModal(false);
    // TODO: Navigate to learning platform
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

      {/* Language Carousel */}
      <footer className="language-carousel">
        <button className="carousel-btn prev" onClick={handlePrevLanguage}>
          ‹
        </button>
        <div className="carousel-content">
          <span className="flag">{languages[currentLanguageIndex].flag}</span>
          <span className="language-name">
            {languages[currentLanguageIndex].name}
          </span>
        </div>
        <button className="carousel-btn next" onClick={handleNextLanguage}>
          ›
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
