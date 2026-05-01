import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "@/contexts/CartContext";
import App from "./App.tsx";
import "./index.css";

/* Keyingi sahifalar uchun chunklarni bo'sh vaqtda oldindan yuklash */
const prefetchRoutes = () => {
  void import("@/pages/Products");
  void import("@/pages/About");
  void import("@/pages/ProductDetail");
};
if (typeof window !== "undefined") {
  const run =
    window.requestIdleCallback ??
    ((cb: () => void) => window.setTimeout(cb, 200));
  run(prefetchRoutes);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
