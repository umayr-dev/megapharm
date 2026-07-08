import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "@/contexts/CartContext";
import { bootstrapI18n } from "@/i18n";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

bootstrapI18n().then(() => {
  createRoot(root).render(
    <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </StrictMode>,
  );
});
