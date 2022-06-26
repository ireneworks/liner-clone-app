import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import fetchSearchResultApi from "../../api/searchResult/searchResultApi";
import SearchResultItem from "./components/searchResultItem/searchResultItem";
import { decodedString, encodedString } from "../../utilities/convertURI";
import { isEmpty } from "../../utilities/typeGuard";
import { isSuccess } from "../../utilities/httpValidation";
import "./searchResultList.scss";
import EmptySearchResult from "./components/emptySearchResult/emptySearchResult";
import QuickMenu from "../../components/aside/aside";

export default function SearchResultList() {
  const location = useLocation();
  const { searchQuery } = useParams();
  const searchKeyword = decodedString(searchQuery);
  const [items, setItems] = useState([]);
  const [approxTrust, setApproxTrust] = useState(0);

  const shownFoundedMessage = useMemo(() => {
    return !!searchKeyword && !isEmpty(items);
  }, [searchQuery, items]);

  useEffect(() => {
    (async function () {
      try {
        if (location.pathname === "/") {
          return;
        }
        const response = await fetchSearchResultApi({
          query: encodedString(searchQuery),
        });
        if (!isSuccess(response)) {
          alert("잠시 후 다시 시도해주세요");
          return;
        }
        setItems(response.data.items);
        setApproxTrust(response.data.approx_trust);
      } catch (e) {}
    })();
  }, [searchQuery]);

  return (
    <>
      <div className="main-content-wrapper">
        {isEmpty(items) && <EmptySearchResult />}
        {shownFoundedMessage && (
          <div className="search-result-header">
            <h3>We found Trusted Results!</h3>
            <p className="search-result-header-sub-text">
              Trusted Results on '{searchKeyword}' from {approxTrust} people.
            </p>
          </div>
        )}
        {items.map((item, index) => (
          <SearchResultItem
            key={index}
            documentId={item.document_id}
            title={item.title}
            description={item.description}
            faviconUrl={item.favicon_url}
            imgUrl={item.image_url}
            url={item.url}
          />
        ))}
      </div>
      <aside className="right-side-wrapper">
        <QuickMenu />
      </aside>
    </>
  );
}
