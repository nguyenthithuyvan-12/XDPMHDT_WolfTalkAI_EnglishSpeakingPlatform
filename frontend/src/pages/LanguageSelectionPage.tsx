import React from "react";
import "../styles/LanguageSelectionPage.css";
import logoWolf from "../assets/wolftalk/logo_wolf.png";

type Language = "vi" | "en" | "fr" | "es";

interface TextContent {
  title: string;
  backButton: string;
}

interface LanguageCard {
  id: string;
  nameVi: string;
  nameEn: string;
  flag: string;
  learners: string;
}

const languages: LanguageCard[] = [
  {
    id: "en",
    nameVi: "Tiếng Anh",
    nameEn: "English",
    flag: "🇺🇸",
    learners: "11,7 Tr người học",
  },
  {
    id: "zh",
    nameVi: "Tiếng Hoa",
    nameEn: "Chinese",
    flag: "🇨🇳",
    learners: "2,86 Tr người học",
  },
  {
    id: "ja",
    nameVi: "Tiếng Nhật",
    nameEn: "Japanese",
    flag: "🇯🇵",
    learners: "247 N người học",
  },
  {
    id: "ko",
    nameVi: "Tiếng Hàn",
    nameEn: "Korean",
    flag: "🇰🇷",
    learners: "225 N người học",
  },
  {
    id: "fr",
    nameVi: "Tiếng Pháp",
    nameEn: "French",
    flag: "🇫🇷",
    learners: "186 N người học",
  },
  {
    id: "de",
    nameVi: "Tiếng Đức",
    nameEn: "German",
    flag: "🇩🇪",
    learners: "116 N người học",
  },
  {
    id: "es",
    nameVi: "Tiếng Tây Ban Nha",
    nameEn: "Spanish",
    flag: "🇪🇸",
    learners: "111 N người học",
  },
  {
    id: "it",
    nameVi: "Tiếng Ý",
    nameEn: "Italian",
    flag: "🇮🇹",
    learners: "74,5 N người học",
  },
];

const translations: Record<Language, TextContent> = {
  vi: {
    title: "Tôi muốn học...",
    backButton: "← Quay lại",
  },
  en: {
    title: "I want to learn...",
    backButton: "← Back",
  },
  fr: {
    title: "Je veux apprendre...",
    backButton: "← Retour",
  },
  es: {
    title: "Quiero aprender...",
    backButton: "← Atrás",
  },
};

interface LanguageSelectionPageProps {
  displayLanguage: Language;
  onBack: () => void;
  onSelectLanguage: (languageId: string) => void;
}

const LanguageSelectionPage: React.FC<LanguageSelectionPageProps> = ({
  displayLanguage,
  onBack,
  onSelectLanguage,
}) => {
  const content = translations[displayLanguage];

  const getLanguageName = (card: LanguageCard): string => {
    return displayLanguage === "vi" ? card.nameVi : card.nameEn;
  };

  return (
    <div className="language-selection-page">
      {/* Header */}
      <header className="selection-header">
        <div className="selection-header-container">
          <button className="back-button" onClick={onBack}>
            {content.backButton}
          </button>
          <div className="logo">
            <img src={logoWolf} alt="WolfTalk Logo" className="logo-wolf" />
            <span className="logo-text">WolfTalk</span>
          </div>
          <div className="header-placeholder"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="selection-main-content">
        <h1 className="selection-title">{content.title}</h1>

        <div className="language-grid">
          {languages.map((language) => (
            <div
              key={language.id}
              className="language-card"
              onClick={() => onSelectLanguage(language.id)}
            >
              <div className="flag-container">{language.flag}</div>
              <h3 className="card-language-name">
                {getLanguageName(language)}
              </h3>
              <p className="card-learners">{language.learners}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LanguageSelectionPage;
