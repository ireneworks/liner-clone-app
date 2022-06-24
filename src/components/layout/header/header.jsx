import React, { useState } from "react";
import "./header.scss";
import logoPath from "../../assets/liner-logo.svg";
import searchIconPath from "../../assets/icons/search-finder-btn.svg";
import { useParams } from "react-router-dom";
import { isEmpty } from "../../../utilities/typeGuard";

export default function Header({ onSearch }) {
  const { keyword } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeInput = (event) => {
    setSearchQuery(event.currentTarget.value);
  };

  const [headerBackgroundDim, setHeaderBackgroundDim] = useState(false);
  const onClickInput = () => setHeaderBackgroundDim(!headerBackgroundDim);

  const encodedString = (source) => {
    const result = encodeURIComponent(source.replaceAll(" ", "-"));
    return result;
  };
  const onKeyDownHandler = (event) => {
    if (event.key === "Enter" && !isEmpty(searchQuery)) {
      return encodedString(searchQuery);
    }
  };
  const onSubmit = () => {
    if (!isEmpty(searchQuery)) {
      return encodedString(searchQuery);
    }
  };

  return (
    <>
      <div className="header-wrapper">
        <img className="logo" alt="Liner Logo" src={logoPath} />
        <div className="text-input-field-wrapper">
          <div className="text-input-field">
            <input
              type="text"
              placeholder="Search on LINER"
              value={searchQuery}
              onChange={onChangeInput}
              onClick={onClickInput}
              onBlur={onClickInput}
              onKeyDown={onKeyDownHandler}
            />
            <button onSubmit={onSubmit}>
              <img alt="Search Submit Button" src={searchIconPath} />
            </button>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
      {headerBackgroundDim && <div className="header-background-dim" />}
    </>
  );
}
