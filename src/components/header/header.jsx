import React, { useState } from "react";
import "../header/header.scss";
import logoPath from "../assets/liner-logo.svg";
import searchIconPath from "../assets/icons/search-finder-btn.svg";

export default function Header() {
  const [dim, setDim] = useState(false);
  const onClickInput = () => setDim(!dim);

  return (
    <>
      <div className="header-wrapper">
        <img className="logo" alt="Liner Logo" src={logoPath} />
        <div className="text-input-field-wrapper">
          <div className="text-input-field">
            <input
              type="text"
              placeholder="Search on LINER"
              onClick={onClickInput}
              onBlur={onClickInput}
            />
            <img alt="Search Submit Button" src={searchIconPath} />
          </div>
        </div>
        <div className="button-wrapper">
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
      {dim && <div className="header-background-dim" />}
    </>
  );
}
