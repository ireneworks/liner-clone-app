import React, { createContext, useContext, useMemo, useState } from "react";

const SearchQueryContext = createContext("");

export function ProvideSearchQuery({ children }) {
  const [query, setQuery] = useState();

  const value = useMemo(
    () => ({
      query,
      setQuery,
    }),
    [query, setQuery]
  );

  return (
    <SearchQueryContext.Provider value={value}>
      {children}
    </SearchQueryContext.Provider>
  );
}

export function useSearchKeywordQuery() {
  return useContext(SearchQueryContext);
}
