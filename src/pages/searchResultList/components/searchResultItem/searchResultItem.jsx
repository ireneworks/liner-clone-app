import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultThumbnailImagePath from "../../assests/default-thumb-0.svg";
import defaultFaviconIconPath from "../../assests/default-favicon.svg";
import { encodedString } from "../../../../utilities/convertURI";
import "./searchResultItem.scss";
import TooltipButton from "../../../../components/buttons/tooltipButton/tooltipButton";
import bookMarkIconUrl from "../../../../components/assets/icons/bookmark-btn.svg";
import shareIconUrl from "../../../../components/assets/icons/share-btn.svg";
import { generateHostname } from "../../../../utilities/generateHostname";
import SignUpModal from "../../../../components/layout/header/signInUpModal/signUpModal/signUpModal";

export default function SearchResultItem({
  documentId,
  title,
  description,
  faviconUrl,
  url,
  imgUrl,
}) {
  const [shownSignupModal, toggleSignUpModal] = useState(false);
  const documentTitle = encodedString(title);

  return (
    <div className="feed-wrapper">
      <div className="feed-content">
        <div className="feed-text">
          <Link
            className="feed-link"
            to={`/trusted-search/highlight/en/${documentId}/${documentTitle}`}
          >
            <h4>{title}</h4>
          </Link>
          <p>{description}</p>
        </div>
        <div className="img-wrapper">
          <Link
            to={`/trusted-search/highlight/en/${documentId}/${documentTitle}`}
            className="img-link"
          >
            <img
              alt={title}
              src={imgUrl !== null ? imgUrl : defaultThumbnailImagePath}
            />
          </Link>
        </div>
      </div>
      <div className="feed-footer">
        <a
          href={url}
          className="feed-link"
          target="_blank"
          rel="external noreferrer"
        >
          <img
            alt="Favicon"
            src={faviconUrl !== null ? faviconUrl : defaultFaviconIconPath}
          />
          <span>{generateHostname(url)}</span>
        </a>
        <div className="right-side">
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
      </div>
    </div>
  );
}

function Children() {
  return <div></div>;
}
