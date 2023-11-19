import React from "react";
import ReactDOM from "react-dom/client";
import UploadForm from "./components/UploadForm";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <UploadForm />
  </React.StrictMode>
);
