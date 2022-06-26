import React, { useEffect, useState } from "react";
import "./aside.scss";
import { Link, useParams } from "react-router-dom";
import { isSuccess } from "../../utilities/httpValidation";
import { encodedString } from "../../utilities/convertURI";
import fetchTrendKeywordApi from "../../api/trendKeywordApi";
import { isEmpty } from "../../utilities/typeGuard";

export default function QuickMenu() {
  const { searchQuery } = useParams();
  const query = encodedString(searchQuery);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetchTrendKeywordApi({ keyword: query });
        if (!isSuccess(response)) {
          alert("잠시 후 다시 시도해주세요");
          return;
        }
        setKeywords(response.data.items);
      } catch (e) {}
    })();
  }, [searchQuery]);

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
