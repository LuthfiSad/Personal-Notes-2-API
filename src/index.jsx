import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { InfoProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>
);
