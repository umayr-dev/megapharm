import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
        <h1 className="text-2xl font-bold text-foreground">
          {t("auth.signInWith")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("auth.noAccount")}{" "}
          <Link
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            {t("auth.register")}
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-foreground"
            >
              {t("auth.email")}
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground",
                "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              )}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-foreground"
              >
                {t("auth.password")}
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t("auth.forgotPassword")}
              </Link>
            </div>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={cn(
                "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground",
                "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-mega-navy py-3 hover:bg-mega-blue"
            disabled={loading}
          >
            {loading ? "..." : t("auth.login")}
          </Button>
        </form>
      </div>
    </div>
  );
}
