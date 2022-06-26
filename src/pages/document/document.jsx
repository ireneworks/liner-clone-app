import React, { useEffect, useState } from "react";
import "./document.scss";
import defaultFaviconIconPath from "../searchResultList/assests/default-favicon.svg";
import { useParams } from "react-router-dom";
import blingIconPath from "../../components/assets/icons/bling.svg";
import { isEmpty } from "../../utilities/typeGuard";
import ArticleTop from "./components/articleTop/articleTop";
import { documentPageApi } from "../../api/documentPageApi";
import TrendKeywords from "../../components/aside/trendKeywords/trendKeywords";
import RecommendArticles from "./components/recommendArticles/recommendArticles";

export default function Document() {
  const { documentId } = useParams();
  const query = useParams();
  const [article, setArticle] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [recommendArticles, setRecommendArticles] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await documentPageApi({
        query,
        documentId,
      });
      if (!response.success) {
        alert(response.message);
        return;
      }

      setArticle(response.data.document);
      setKeywords(response.data.keywords.items);
      setRecommendArticles(response.data.recommendArticles);
    })();
  }, [query]);

  return article ? (
    <>
      <div className="main-content-wrapper">
        <ArticleTop />
        <article className="article-wrapper">
          <section>
            {article.image_url !== null && (
              <img className="thumbnail" src={article.image_url} />
            )}
            <h4>{article.title}</h4>
            <div className="original-info">
              <div className="hostname">
                <a href={article.url} target="_blank" rel="noreferrer">
                  <img
                    className="favicon-icon"
                    src={
                      article.favicon_url !== null
                        ? article.favicon_url
                        : defaultFaviconIconPath
                    }
                  />
                  {article.url}
                </a>
              </div>
            </div>
          </section>
          <section className="detail-description">
            <div>
              {!isEmpty(article.phrases) && (
                <div className="highlight-section">
                  <img alt="Popular Highlights" src={blingIconPath} />
                  <span>Popular Highlights</span>
                </div>
              )}
              <div className="highlight-text-wrapper">
                {!isEmpty(article.phrases) &&
                  article.phrases.map((phrase, index) => (
                    <div key={index}>
                      <p>{phrase.text}</p>
                    </div>
                  ))}
              </div>
            </div>
            <a href={article.url} target="_blank" rel="noreferrer">
              View Original
            </a>
            <section className="information">
              {article.description && (
                <div>
                  <strong>Description</strong>
                  <p>{article.description}</p>
                </div>
              )}

              {article.author && (
                <div>
                  <strong>Authors</strong>
                  <p>{article.author}</p>
                </div>
              )}
              {article.country && (
                <div>
                  <strong>Country</strong>
                  <p>{article.country}</p>
                </div>
              )}
            </section>
          </section>
        </article>
      </div>
      <aside className="right-side-wrapper">
        <TrendKeywords keywords={keywords} />
        {recommendArticles && (
          <RecommendArticles recommendArticles={recommendArticles} />
        )}
      </aside>
    </>
  ) : null;
}
