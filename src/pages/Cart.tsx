import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export function Cart() {
  const { t } = useTranslation();
  const { items, removeItem, setQuantity } = useCart();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("cart.title")}</span>
      </nav>

      <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        {t("cart.title")}
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center">
          <p className="text-muted-foreground">{t("cart.empty")}</p>
          <Button asChild variant="outline" size="lg" className="mt-6">
            <Link to="/products">{t("cart.continueShopping")}</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("cart.quantity")}: {quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-md border border-border">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-r-none"
                      onClick={() =>
                        setQuantity(product.id, Math.max(0, quantity - 1))
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="flex h-9 min-w-[2rem] items-center justify-center px-2 text-sm">
                      {quantity}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-l-none"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => removeItem(product.id)}
                    aria-label={t("cart.remove")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="outline">
              <Link to="/products">{t("cart.continueShopping")}</Link>
            </Button>
            <Button className="bg-mega-navy hover:bg-mega-blue">
              {t("cart.checkout")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
