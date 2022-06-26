import React from "react";

import "./tooltipButton.scss";

export default function TooltipButton({ tooltipText, children, onClick }) {
  return (
    <button type="button" className="tooltip-button-wrapper" onClick={onClick}>
      {children}
      <span>{tooltipText}</span>
    </button>
  );
}
