import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Product } from "@/data/products";

type CartItem = { product: Product; quantity: number };

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; product: Product; quantity?: number }
  | { type: "REMOVE"; productId: string }
  | { type: "SET_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const qty = action.quantity ?? 1;
      const existing = state.items.find(
        (i) => i.product.id === action.product.id,
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + qty }
              : i,
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, quantity: qty }],
      };
    }
    case "REMOVE":
      return {
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    case "SET_QUANTITY":
      if (action.quantity < 1) {
        return {
          items: state.items.filter((i) => i.product.id !== action.productId),
        };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId
            ? { ...i, quantity: action.quantity }
            : i,
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{
  items: CartItem[];
  itemCount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const itemCount = state.items.reduce((n, i) => n + i.quantity, 0);
  const total = state.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );

  const addItem = (product: Product, quantity = 1) =>
    dispatch({ type: "ADD", product, quantity });
  const removeItem = (productId: string) =>
    dispatch({ type: "REMOVE", productId });
  const setQuantity = (productId: string, quantity: number) =>
    dispatch({ type: "SET_QUANTITY", productId, quantity });
  const clearCart = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        total,
        addItem,
        removeItem,
        setQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
