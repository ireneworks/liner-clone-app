import request from "../config/config";

export function fetchTrendKeywordsSearchResultApi({ keyword = "", size = 12 }) {
  return request.get(`/recommendation/keyword`, {
    headers: { Authorization: "Bearer null" },
    params: {
      keyword,
      size,
    },
  });
}

export function fetchTrendKeywordsDocumentApi({ size = 12, documentId }) {
  return request.get(`/recommendation/keyword`, {
    headers: { Authorization: "Bearer null" },
    params: {
      document_id: documentId,
      size,
    },
  });
}
