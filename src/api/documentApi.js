import request from "./config/config";

export default function fetchDocumentApi({ documentId }) {
  return request.get(`/document/${documentId}`, {
    headers: { Authorization: "Bearer null" },
  });
}
