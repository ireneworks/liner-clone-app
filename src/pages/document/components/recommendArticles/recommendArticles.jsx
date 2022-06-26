import React, { useEffect, useState } from "react";
import fetchRecommendArticlesApi from "../../../../api/document/recommendArticlesApi";
import { isSuccess } from "../../../../utilities/httpValidation";
import { useParams } from "react-router-dom";
import { isEmpty } from "../../../../utilities/typeGuard";

export default function RecommendArticles() {
  const { documentId } = useParams();
  const [recommendArticles, setRecommendArticles] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetchRecommendArticlesApi({
          document_id: documentId,
        });
        if (!isSuccess(response)) {
          alert("다시 시도해주세요.");
          return;
        }
        setRecommendArticles(response.data);
      } catch (e) {}
    })();
  }, [documentId]);

  //TODO URL CUTOFF
  //TODO INITIAL 7 DOCS, BUTTON ONCLICK ADD 7 DOCS

  return (
    <>
      {!isEmpty(recommendArticles) &&
        recommendArticles.items.map((article, index) => (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article.url}</p>
          </div>
        ))}
    </>
  );
}
