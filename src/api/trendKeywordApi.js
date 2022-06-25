import request from "./config/config";

export default function fetchTrendKeywordApi({ keyword = "", size = 12 }) {
  return request.get(`/recommendation/keyword`, {
    headers: { Authorization: "Bearer null" },
    params: {
      keyword,
      size,
    },
  });
}
