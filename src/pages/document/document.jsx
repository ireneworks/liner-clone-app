import React, { useEffect, useState } from "react";
import "./document.scss";
import defaultFaviconIconPath from "../searchResultList/assests/default-favicon.svg";
import { useParams } from "react-router-dom";
import blingIconPath from "../../components/assets/icons/bling.svg";
import fetchDocumentApi from "../../api/document/documentApi";
import { isSuccess } from "../../utilities/httpValidation";
import { isEmpty } from "../../utilities/typeGuard";
import ArticleTop from "./components/articleTop/articleTop";
import QuickMenu from "../../components/aside/aside";

export default function Document() {
  const query = useParams();
  const [article, setArticle] = useState({});
  // const [hostname] = article.url.match(/https?:\/\/[^\/$\s]+/gi);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetchDocumentApi(query);
        if (!isSuccess(response)) {
          alert("잠시 후 다시 시도해주세요");
          return;
        }
        setArticle(response.data);
      } catch (e) {}
    })();
  }, [query]);

  return (
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
                <div>
                  <img alt="Popular Highlights" src={blingIconPath} />
                  <span>Popular Highlights</span>
                </div>
              )}
              {/*{!isEmpty(article.phrases) &&*/}
              {/*  article.phrases.map((phrase, index) => (*/}
              {/*    <p key={index}>{phrase.text}</p>*/}
              {/*  ))}*/}
            </div>
            <a href={article.url} target="_blank" rel="noreferrer">
              View Original
            </a>
            <section>
              {article.description && (
                <div>
                  <p>Description</p>
                  <p>{article.description}</p>
                </div>
              )}

              {article.author && (
                <div>
                  <p>Authors</p>
                  <p>{article.author}</p>
                </div>
              )}
              {article.country && (
                <div>
                  <p>Country</p>
                  <p>{article.country}</p>
                </div>
              )}
            </section>
          </section>
        </article>
      </div>
      <aside className="right-side-wrapper">
        <QuickMenu />
      </aside>
    </>
  );
}
