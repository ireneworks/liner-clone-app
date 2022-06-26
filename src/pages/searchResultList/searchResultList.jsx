import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchResultItem from "./components/searchResultItem/searchResultItem";
import { decodedString, encodedString } from "../../utilities/convertURI";
import "./searchResultList.scss";
import EmptySearchResult from "./components/emptySearchResult/emptySearchResult";
import TrendKeywords from "../../components/aside/trendKeywords/trendKeywords";
import { searchResultPageApi } from "../../api/searchResultPageApi";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchSearchResultApi from "../../api/searchResult/searchResultApi";
import { isEmpty } from "../../utilities/typeGuard";

export default function SearchResultList() {
  const location = useLocation();
  const { searchQuery } = useParams();
  const query = encodedString(searchQuery);
  const searchKeyword = decodedString(searchQuery);
  const [items, setItems] = useState([]);
  const [isItemsEmpty, setItemEmptyFlag] = useState(true);
  const [approxTrust, setApproxTrust] = useState(0);
  const [trendKeywords, setTrendKeywords] = useState([]);
  const [anchor, setAnchor] = useState(null);

  const shownFoundedMessage = useMemo(() => {
    return !!searchKeyword && !isEmpty(items);
  }, [searchQuery, items]);

  useEffect(() => {
    (async function () {
      if (location.pathname === "/") {
        return;
      }
      const response = await searchResultPageApi({
        query,
        keyword: query,
      });
      if (!response.success) {
        alert(response.message);
        return;
      }
      setItems(response.data.results.items);
      setItemEmptyFlag(response.data.results.items.length <= 0);
      setAnchor(response.data.results.anchor);
      setApproxTrust(response.data.results.approx_trust);
      setTrendKeywords(response.data.keywords.items);
    })();
  }, [searchQuery]);

  const onNextHandler = async () => {
    try {
      const response = await fetchSearchResultApi({ query, anchor });
      if (!(response.status === 200)) {
        alert("다시 시도해 주세요.");
        return;
      }
      setItems(() => items.concat(response.data.items));
      setAnchor(response.data.anchor);
      setItemEmptyFlag(response.data.results.items.length <= 0);
      setApproxTrust(response.data.results.approx_trust);
      setTrendKeywords(response.data.keywords.items);
    } catch (e) {}
  };

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
        <InfiniteScroll
          next={onNextHandler}
          hasMore={!isItemsEmpty}
          dataLength={items.length}
          scrollThreshold={1}
        >
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
        </InfiniteScroll>
      </div>
      <aside className="right-side-wrapper">
        <TrendKeywords keywords={trendKeywords} />
      </aside>
    </>
  );
}
