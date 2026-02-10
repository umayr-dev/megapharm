import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.contact")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("nav.contact")}
      </h1>
      <p className="mt-2 text-muted-foreground">{t("footer.contact")}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-mega-navy" />
              <span>
                Uzbekistan, Tashkent, Yunus Abad district, Hotira street 1
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-mega-navy" />
              <a href="tel:+998901234567" className="hover:text-primary">
                +998 90 123 45 67
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-mega-navy" />
              <a
                href="mailto:megafarmservice@mail.ru"
                className="hover:text-primary"
              >
                megafarmservice@mail.ru
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">
            Send a message
          </h2>
          {sent ? (
            <p className="mt-4 text-muted-foreground">
              Thank you. We will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className={cn(
                    "mt-1 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary",
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className={cn(
                    "mt-1 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary",
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  className={cn(
                    "mt-1 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary",
                  )}
                />
              </div>
              <Button type="submit" className="bg-mega-navy hover:bg-mega-blue">
                Send
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
