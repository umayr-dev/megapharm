import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DiscountPopup } from "@/components/DiscountPopup";
import { ArrowUp, MessageCircle } from "lucide-react";

export function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div
              className="flex min-h-[50vh] items-center justify-center"
              aria-busy="true"
              aria-label="Loading"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-mega-navy border-t-transparent" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <DiscountPopup />
      {/* Floating actions: scroll-to-top & support chat */}
      <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:bottom-8 md:right-6">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-mega-navy text-white shadow-lg transition hover:bg-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-mega-navy text-white shadow-lg transition hover:bg-mega-blue focus:outline-none focus:ring-2 focus:ring-mega-blue focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Support chat"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>

      {chatOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/20"
          onClick={() => setChatOpen(false)}
        >
          <div
            className="mb-24 mr-4 w-[320px] min-h-[420px] rounded-2xl bg-white p-5 shadow-2xl md:mb-24 md:mr-6 md:w-[360px] md:min-h-[460px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-foreground">
                Support chat
              </h2>
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setChatOpen(false)}
              >
                ✕
              </button>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Send us a message and we will get back to you as soon as
              possible.
            </p>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setChatOpen(false);
              }}
            >
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mega-navy"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-mega-navy"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-mega-navy px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-mega-blue"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
