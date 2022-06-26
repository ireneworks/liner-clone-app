import React from "react";
import "./trendKeywords.scss";
import { Link } from "react-router-dom";
import { encodedString } from "../../../utilities/convertURI";
import { isEmpty } from "../../../utilities/typeGuard";

export default function TrendKeywords({ keywords }) {
  return (
    <section className="trend-keyword-wrapper">
      <h2>People Also Searched For</h2>
      <ul>
        {isEmpty(keywords) && <p>No Keywords</p>}
        {keywords.map((keyword, index) => (
          <Link to={`/trusted-search/en/${encodedString(keyword)}`} key={index}>
            <li>#{keyword}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
