import React, { useEffect, useState } from "react";
import { isEmpty } from "../../../../utilities/typeGuard";
import "./recommendArticles.scss";
import { generateHostname } from "../../../../utilities/generateHostname";
import { useNavigate } from "react-router-dom";

export default function RecommendArticles({ recommendArticles }) {
  const [shownRecommendArticles, setShownRecommendArticles] = useState([]);
  const [recommendArticleItemsOrigin, setRecommendArticleItemsOrigin] =
    useState(recommendArticles.items);
  const navigate = useNavigate();

  useEffect(() => {
    if (recommendArticles.items.length > 0) {
      const splicedRecommendArticles = recommendArticles.items.slice(0, 7);
      setShownRecommendArticles(splicedRecommendArticles);
      setRecommendArticleItemsOrigin(recommendArticles.items.slice(7));
    }
  }, [recommendArticles]);

  const onLoadMore = () => {
    setShownRecommendArticles((shownRecommendArticles) =>
      shownRecommendArticles.concat(recommendArticleItemsOrigin.slice(0, 5))
    );
    setRecommendArticleItemsOrigin(recommendArticleItemsOrigin.slice(5));
  };

  return (
    <div className="recommend-articles-wrapper">
      <h2>People Also Read</h2>
      {!isEmpty(shownRecommendArticles) &&
        shownRecommendArticles.map((article, index) => (
          <div key={index}>
            <h4
              onClick={() =>
                navigate(
                  `/trusted-search/highlight/en/${article.document_id}/${article.title}`
                )
              }
            >
              {article.title}
            </h4>
            <a href={article.url} target="_blank" rel="noreferrer">
              {generateHostname(article.url)}
            </a>
          </div>
        ))}
      {recommendArticleItemsOrigin.length > 0 && (
        <button onClick={onLoadMore} className="show-more-button" type="button">
          Show more
        </button>
      )}
    </div>
  );
}
