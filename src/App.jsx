import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/layout/layout";
import SearchResultList from "./pages/searchResultList/searchResultList";
import NotFound from "./pages/404/notFound";
import Document from "./pages/document/document";

function App() {
  const navigate = useNavigate();
  const onSearchHandler = (searchQuery) => {
    navigate(`/trusted-search/en/${searchQuery}`);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout onSearch={onSearchHandler} />}>
        <Route path="/" element={<SearchResultList />} />
        <Route path="/trusted-search/en/" element={<SearchResultList />} />
        <Route
          path="/trusted-search/en/:searchQuery"
          element={<SearchResultList />}
        />
        <Route
          path="/trusted-search/highlight/en/:documentId/:documentTitle"
          element={<Document />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
