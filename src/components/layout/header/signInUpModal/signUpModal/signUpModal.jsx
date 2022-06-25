import React from "react";
import ReactDOM from "react-dom";
import "./signUpModal.scss";

export default function SignUpModal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        <button
          type="button"
          className="close-button"
          onClick={() => onClose(false)}
        />
        <h3>
          Sign Up
          <br />
          to get the best results
        </h3>
        <div className="social-login-wrapper">
          <div>
            <button type="button">
              <span className="google-sign-in" />
              <span className="sign-in-text">Sign up with Google</span>
            </button>
          </div>
          <div>
            <button type="button">
              <span className="facebook-sign-in" />
              <span className="sign-in-text">Sign up with Facebook</span>
            </button>
          </div>
          <div>
            <button type="button">
              <span className="apple-sign-in" />
              <span className="sign-in-text">Sign up with Apple</span>
            </button>
          </div>
          <div className="twitter-sign-in-container">
            <button type="button">
              <span className="twitter-sign-in" />
              <span className="sign-in-text">Sign up with Twitter</span>
            </button>
          </div>
        </div>
        <p className="sign-in-area">
          Already have an account? <button>Sign In</button>
        </p>
        <p className="policy">
          By continuing, you agree to LINER's <button>Terms of Service</button>{" "}
          and <button>Privacy Policy</button>.
        </p>
      </div>
    </div>,
    document.getElementById("root")
  );
}
