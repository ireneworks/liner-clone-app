import React from "react";
import { Link } from "react-router-dom";
import defaultThumbnailImagePath from "../assests/default-thumb-0.svg";
import defaultFaviconIconPath from "../assests/default-favicon.svg";
import { encodedString } from "../../../utilities/convertURI";
import "./searchResultItem.scss";

export default function SearchResultItem({
  documentId,
  title,
  description,
  faviconUrl,
  url,
  imgUrl,
}) {
  const documentTitle = encodedString(title);

  const [hostname] = url.match(/https?:\/\/[^\/$\s]+/gi);

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
          <span>{hostname}</span>
        </a>
        <div className="right-side">
          <button type="button" className="bookmark-icon">
            <span>Bookmark</span>
          </button>
          <button type="button" className="share-icon">
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
