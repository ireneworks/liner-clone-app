import React from "react";
import "./emptySearchResult.scss";
import { useLocation } from "react-router-dom";

export default function EmptySearchResult() {
  const location = useLocation();
  return (
    <>
      {(location.pathname === "/" && (
        <p>Enter Keyword to See Trusted Results</p>
      )) || (
        <div className="search-result-header">
          <div className="search-no-result-container">
            <p>No search result that meets LINER’s standard.</p>
          </div>
        </div>
      )}
    </>
  );
}
