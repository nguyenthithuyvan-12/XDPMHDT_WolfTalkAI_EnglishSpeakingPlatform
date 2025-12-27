import React from "react";
import "./SmartphoneIcon.css";

interface SmartphoneIconProps {
  size?: number;
  className?: string;
}

const SmartphoneIcon: React.FC<SmartphoneIconProps> = ({
  size = 300,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`smartphone-icon ${className}`}
    >
      {/* Phone Body - Outer Frame */}
      <rect
        x="45"
        y="30"
        width="210"
        height="340"
        rx="30"
        fill="#1AC956"
        filter="drop-shadow(0 20px 40px rgba(26, 201, 86, 0.3))"
      />

      {/* Phone Screen Border */}
      <rect
        x="55"
        y="45"
        width="190"
        height="310"
        rx="25"
        fill="#E8F5E9"
        stroke="#4DD0E1"
        strokeWidth="8"
      />

      {/* Screen Content Area */}
      <rect x="65" y="60" width="170" height="280" rx="20" fill="white" />

      {/* Mascot (WolfTalk Owl) on Screen */}
      <g transform="translate(150, 150)">
        {/* Head */}
        <ellipse cx="0" cy="-5" rx="35" ry="38" fill="#7BD82E" />

        {/* Left Eye White */}
        <circle cx="-12" cy="-15" r="12" fill="white" />

        {/* Right Eye White */}
        <circle cx="12" cy="-15" r="12" fill="white" />

        {/* Left Pupil */}
        <circle cx="-12" cy="-15" r="8" fill="#1B1B1B" />
        <circle cx="-10" cy="-17" r="3" fill="white" />

        {/* Right Pupil */}
        <circle cx="12" cy="-15" r="8" fill="#1B1B1B" />
        <circle cx="14" cy="-17" r="3" fill="white" />

        {/* Left Eyebrow */}
        <path
          d="M -20 -28 Q -12 -35 -4 -28"
          stroke="#7BD82E"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Eyebrow */}
        <path
          d="M 4 -28 Q 12 -35 20 -28"
          stroke="#7BD82E"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Beak */}
        <path d="M -5 5 L 0 15 L 5 5 Z" fill="#FFA500" />

        {/* Beak outline */}
        <path
          d="M -5 5 L 0 15 L 5 5 Z"
          stroke="#FF8C00"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Mouth */}
        <path
          d="M -8 12 Q 0 18 8 12"
          stroke="#1B1B1B"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Home Button */}
      <circle
        cx="150"
        cy="365"
        r="8"
        fill="white"
        stroke="#1AC956"
        strokeWidth="2"
      />

      {/* Notch / Speaker */}
      <rect
        x="130"
        y="50"
        width="40"
        height="8"
        rx="4"
        fill="#333333"
        opacity="0.3"
      />
    </svg>
  );
};

export default SmartphoneIcon;
