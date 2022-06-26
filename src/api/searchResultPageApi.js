import { fetchTrendKeywordsSearchResultApi } from "./trendKeywords/trendKeywordsApi";
import fetchSearchResultApi from "./searchResult/searchResultApi";

export async function searchResultPageApi({ keyword, size, query }) {
  try {
    const response = await Promise.all([
      fetchSearchResultApi({ query }),
      fetchTrendKeywordsSearchResultApi({ keyword, size }),
    ]);
    const isEverySuccess = response.every((v) => v.status === 200);
    if (!isEverySuccess) {
      return {
        success: false,
        message: "잠시 후 시도하세요.",
      };
    }
    return {
      success: true,
      data: {
        results: response[0].data,
        keywords: response[1].data,
      },
    };
  } catch (e) {
    return {
      success: false,
      message: e.message || "잠시 후 시도하세요.",
    };
  }
}
