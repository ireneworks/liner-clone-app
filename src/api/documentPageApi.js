import { fetchTrendKeywordsDocumentApi } from "./trendKeywords/trendKeywordsApi";
import fetchDocumentApi from "./document/documentApi";
import fetchRecommendArticlesApi from "./document/recommendArticlesApi";

export async function documentPageApi({ size, query, documentId }) {
  try {
    const response = await Promise.all([
      fetchTrendKeywordsDocumentApi({ documentId, size }),
      fetchDocumentApi(query),
      fetchRecommendArticlesApi({
        document_id: documentId,
      }),
    ]);
    const isEverySuccess = response.every((v) => v.status === 200);
    if (!isEverySuccess) {
      return {
        success: false,
        message: "잠시 후 시도하세요",
      };
    }
    return {
      success: true,
      data: {
        keywords: response[0].data,
        document: response[1].data,
        recommendArticles: response[2].data,
      },
    };
  } catch (e) {
    return {
      success: false,
      message: e.message || "잠시 후 시도하세요.",
    };
  }
}
