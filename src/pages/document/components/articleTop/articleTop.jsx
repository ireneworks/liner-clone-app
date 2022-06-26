import React, { useState } from "react";
import bookMarkIconUrl from "../../../../components/assets/icons/bookmark-btn.svg";
import shareIconUrl from "../../../../components/assets/icons/share-btn.svg";
import { useNavigate } from "react-router-dom";
import "./articleTop.scss";
import TooltipButton from "../../../../components/buttons/tooltipButton/tooltipButton";
import SignUpModal from "../../../../components/layout/header/signInUpModal/signUpModal/signUpModal";

export default function ArticleTop() {
  const navigate = useNavigate();
  const [shownSignupModal, toggleSignUpModal] = useState(false);

  return (
    <section className="article-top">
      <button className="back-button" onClick={() => navigate(-1)} />
      <div>
        <TooltipButton
          tooltipText="Save"
          onClick={() => toggleSignUpModal(true)}
        >
          <img src={bookMarkIconUrl} />
        </TooltipButton>
        {shownSignupModal && (
          <SignUpModal onClose={() => toggleSignUpModal(false)} />
        )}
        <TooltipButton tooltipText="Share">
          <img src={shareIconUrl} />
        </TooltipButton>
      </div>
    </section>
  );
}
