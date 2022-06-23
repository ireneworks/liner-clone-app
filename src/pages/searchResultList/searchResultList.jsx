import React from "react";
import faviconPath from "../searchResultList/assests/default-favicon.svg";
import defaultThumbnailImagePath from "../searchResultList/assests/default-thumb-0.svg";

export default function SearchResultList() {
  return (
    <>
      <div>
        <h1>We found Trusted Results!</h1>
        <p>Trusted Results on '개발' from 40 people.</p>
      </div>
      <div>
        <div>
          <h2>타이틀</h2>
          <p>description</p>
          <div>
            <img alt="Favicon" src={faviconPath} />
            <span>www.naver.com</span>
          </div>
        </div>
        <img alt="Thumbnail Image" src={defaultThumbnailImagePath} />
      </div>
    </>
  );
}
