import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="h-screen bg-gray-800 p-8 text-white">
      <App />
    </main>
  </StrictMode>
);
