import React, { useEffect, useState } from "react";
import bookmarkIconPath from "../../components/assets/icons/bookmark-btn.svg";
import shareIconPath from "../../components/assets/icons/share-btn.svg";
import "./document.scss";
import { Link, useParams } from "react-router-dom";
import blingIconPath from "../../components/assets/icons/bling.svg";
import defaultFaviconIconPath from "../searchResultList/assests/default-favicon.svg";
import fetchDocumentApi from "../../api/documentApi";
import { isSuccess } from "../../utilities/httpValidation";

export default function Document() {
  const query = useParams();
  const [article, setArticle] = useState({});

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
    <article className="article-wrapper">
      <section className="article-top">
        <button className="back-button" />
        <div>
          <button className="bookmark-button">
            <img alt="Bookmark" src={bookmarkIconPath} />
          </button>
          <button className="share-button">
            <img alt="Share" src={shareIconPath} />
          </button>
        </div>
      </section>
      <section>
        {article.image_url && (
          <img className="thumbnail" src={article.image_url} />
        )}

        <h4>{article.title}</h4>
        <div className="original-info">
          <div className="hostname">
            <Link to="medium.com">
              <img
                className="favicon-icon"
                src={
                  article.favicon_url !== null
                    ? article.favicon_url
                    : defaultFaviconIconPath
                }
              />
              {article.url}
            </Link>
          </div>
        </div>
      </section>
      <section className="detail-description">
        <div>
          <img alt="Popular Highlights" src={blingIconPath} />
          <span>Popular Highlights</span>
        </div>
        {/*{article.phrases.map((phrase) => (*/}
        {/*  <p>phrase_id</p>*/}
        {/*))}*/}
        <button>View Original</button>
        <section>
          <p>Description</p>
          <p>
            디자인의 본질적인 가치를추구하다 | 브라운(Braun)은 올해로 창업
            100주년을 맞이하는 독일의 소형 가전제품 브랜드이다. 1921년 엔지니어
            막스 브라운이 설립해 처음엔 라디오 세트용 부품을 생산하다 이후
            라디오 제조업체로 괄목상대했다. 1950년대 들어 회사의 사업 방향을
            종합 가전 제조⋅판매로 확장하고 우수한 기술력을 기반으로 기능적인
            제품을 생산하는 한편, 특히 디자인에 심혈을 기울
          </p>
        </section>
      </section>
    </article>
  );
}
