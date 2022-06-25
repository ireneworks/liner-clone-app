import React from "react";
import "./signInModal.scss";

export default function SignInModal({ onClose }) {
  const onClick = () => onClose(false);

  return (
    <div className="modal-background">
      <div className="modal">
        <button type="button" className="close-button" onClick={onClick} />
        <h3>Sign In</h3>
        <div className="social-login-wrapper">
          <div>
            <button type="button">
              <span className="google-sign-in" />
              <span className="sign-in-text">Sign in with Google</span>
            </button>
          </div>
          <div>
            <button type="button">
              <span className="facebook-sign-in" />
              <span className="sign-in-text">Sign in with Facebook</span>
            </button>
          </div>
          <div>
            <button type="button">
              <span className="apple-sign-in" />
              <span className="sign-in-text">Sign in with Apple</span>
            </button>
          </div>
          <div className="twitter-sign-in-container">
            <button type="button">
              <span className="twitter-sign-in" />
              <span className="sign-in-text">Sign in with Twitter</span>
            </button>
          </div>
        </div>
        <p>
          Don't have an account? <button>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
