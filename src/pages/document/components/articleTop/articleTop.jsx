import React from "react";
import bookmarkIconPath from "../../../../components/assets/icons/bookmark-btn.svg";
import shareIconPath from "../../../../components/assets/icons/share-btn.svg";
import { useNavigate } from "react-router-dom";
import "./articleTop.scss";

export default function ArticleTop() {
  const navigate = useNavigate();

  return (
    <section className="article-top">
      <button className="back-button" onClick={() => navigate(-1)} />
      <div>
        <button className="bookmark-button">
          <img alt="Bookmark" src={bookmarkIconPath} />
        </button>
        <button className="share-button">
          <img alt="Share" src={shareIconPath} />
        </button>
      </div>
    </section>
  );
}
