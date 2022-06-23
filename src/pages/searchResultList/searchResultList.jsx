import React from "react";
import faviconPath from "../searchResultList/assests/default-favicon.svg";
import defaultThumbnailImagePath from "../searchResultList/assests/default-thumb-0.svg";
import "../searchResultList/searchResultList.scss";

export default function SearchResultList() {
  return (
    <>
      <div className="search-result-header">
        <h3>We found Trusted Results!</h3>
        <p>Trusted Results on '개발' from 40 people.</p>
      </div>
      <div className="feed-wrapper">
        <div className="feed-content">
          <h4>릴리, 'AI' 바이오로직과 1.21억弗 딜.."당뇨약 개발"</h4>
          <p>
            머신러닝 통한 다중항원 특이적 항체 '멀티바디(Multibody)' 플랫폼
            활용, 당뇨병 항체 치료제 발굴∙개발. 일라이릴리(Eli Lilly)가 AI
            컴퓨팅을 ...
          </p>
        </div>
        <div className="feed-footer">
          <div>
            <img alt="Favicon" src={faviconPath} />
            <span>www.naver.com</span>
          </div>
          <div>
            <img />
            <img />
          </div>
        </div>
        <img alt="Thumbnail Image" src={defaultThumbnailImagePath} />
      </div>
    </>
  );
}
