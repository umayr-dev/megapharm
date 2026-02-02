import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
        <h1 className="text-2xl font-bold text-foreground">
          {t("auth.createAccount")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("auth.hasAccount")}{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            {t("auth.login")}
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="reg-name"
              className="block text-sm font-medium text-foreground"
            >
              {t("auth.fullName")}
            </label>
            <input
              id="reg-name"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className={cn(
                "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground",
                "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              )}
            />
          </div>
          <div>
            <label
              htmlFor="reg-email"
              className="block text-sm font-medium text-foreground"
            >
              {t("auth.email")}
            </label>
            <input
              id="reg-email"
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
            <label
              htmlFor="reg-password"
              className="block text-sm font-medium text-foreground"
            >
              {t("auth.password")}
            </label>
            <input
              id="reg-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className={cn(
                "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground",
                "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              )}
            />
          </div>
          <div>
            <label
              htmlFor="reg-confirm"
              className="block text-sm font-medium text-foreground"
            >
              {t("auth.confirmPassword")}
            </label>
            <input
              id="reg-confirm"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className={cn(
                "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground",
                "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              )}
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-mega-navy py-3 hover:bg-mega-blue"
            disabled={loading}
          >
            {loading ? "..." : t("auth.register")}
          </Button>
        </form>
      </div>
    </div>
  );
}
