import React, { useMemo } from "react";
import "./emptySearchResult.scss";
import { useLocation } from "react-router-dom";

export default function EmptySearchResult() {
  const location = useLocation();
  const isHomeLocation = useMemo(() => {
    return location.pathname === "/";
  }, [location]);

  return isHomeLocation ? (
    <p>Enter Keyword to See Trusted Results</p>
  ) : (
    <div className="search-result-header">
      <div className="search-no-result-container">
        <p>No search result that meets LINER’s standard.</p>
      </div>
    </div>
  );
}
