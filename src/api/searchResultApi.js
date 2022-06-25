import request from "./config/config";

export default function fetchSearchResultApi({
  query = "",
  size = 20,
  anchor = null,
  num_of_phrase = 7,
}) {
  return request.post(
    "/search/document",
    {
      query,
      num_of_phrase,
    },
    {
      headers: { Authorization: "Bearer null" },
      params: {
        size,
        anchor,
      },
    }
  );
}
