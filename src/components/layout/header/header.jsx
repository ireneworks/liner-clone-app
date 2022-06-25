import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import { isEmpty } from "../../../utilities/typeGuard";
import { useParams } from "react-router-dom";
import logoPath from "../../assets/liner-logo.svg";
import searchIconPath from "../../assets/icons/search-finder-btn.svg";
import { encodedString } from "../../../utilities/convertURI";
import SignInModal from "./signInUpModal/signInModal/signInModal";
import SignUpModal from "./signInUpModal/signUpModal/signUpModal";

export default function Header({ onSearch }) {
  const { searchQuery } = useParams();
  const inputRef = useRef();
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [headerBackgroundDim, setHeaderBackgroundDim] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const onCloseSignInModal = (value) => {
    return setSignInModal(value);
  };
  const onCloseSignUpModal = (value) => {
    setSignUpModal(value);
  };

  const onChangeInputHandler = (event) => {
    setSearchKeyword(event.currentTarget.value);
  };
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter" && !isEmpty(searchKeyword)) {
      setHeaderBackgroundDim(false);
      inputRef.current.blur();
      return onSearch(encodedString(searchKeyword));
    }
  };
  const onClickInputHandler = () => {
    if (!isEmpty(searchKeyword)) {
      setHeaderBackgroundDim(false);
      return onSearch(encodedString(searchKeyword));
    }
  };

  useEffect(() => {
    if (searchQuery && !isEmpty(searchKeyword)) {
      const decodedString = decodeURIComponent(searchQuery);
      setSearchKeyword(decodedString.replaceAll("-", " "));
    }
  }, [searchQuery]);

  return (
    <>
      {signInModal && <SignInModal onClose={onCloseSignInModal} />}
      {signUpModal && <SignUpModal onClose={onCloseSignUpModal} />}
      <div className="header-wrapper">
        <img className="logo" alt="Liner Logo" src={logoPath} />
        <div className="text-input-field-wrapper">
          <div className="text-input-field">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search on LINER"
              value={searchKeyword}
              onChange={onChangeInputHandler}
              onFocus={() => setHeaderBackgroundDim(true)}
              onBlur={() => setHeaderBackgroundDim(false)}
              onKeyPress={onKeyPressHandler}
            />
            <button type="button" onClick={onClickInputHandler}>
              <img alt="Search Submit Button" src={searchIconPath} />
            </button>
          </div>
        </div>
        <div className="button-wrapper">
          <button
            className="sign-in-button"
            onClick={() => setSignInModal(!signInModal)}
          >
            Sign In
          </button>
          <button
            className="sign-up-button"
            onClick={() => setSignUpModal(!signUpModal)}
          >
            Sign Up
          </button>
        </div>
      </div>
      {headerBackgroundDim && <div className="header-background-dim" />}
    </>
  );
}
