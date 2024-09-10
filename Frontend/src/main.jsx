import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:text-white dark:bg-slate-900">
      <App />
    </div>
  </BrowserRouter>
);
