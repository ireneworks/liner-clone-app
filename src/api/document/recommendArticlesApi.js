import request from "../config/config";

export default function fetchRecommendArticlesApi({
  size = 20,
  document_id = "",
  anchor = null,
}) {
  return request.get(`/recommendation/document`, {
    headers: { Authorization: "Bearer null" },
    params: {
      size,
      document_id,
      anchor,
    },
  });
}
