import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import "@/i18n";

const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home }))
);
const Products = lazy(() =>
  import("@/pages/Products").then((m) => ({ default: m.Products }))
);
const ProductDetail = lazy(() =>
  import("@/pages/ProductDetail").then((m) => ({ default: m.ProductDetail }))
);
const Cart = lazy(() =>
  import("@/pages/Cart").then((m) => ({ default: m.Cart }))
);
const Login = lazy(() =>
  import("@/pages/Login").then((m) => ({ default: m.Login }))
);
const Register = lazy(() =>
  import("@/pages/Register").then((m) => ({ default: m.Register }))
);
const WhyMegaPharm = lazy(() =>
  import("@/pages/WhyMegaPharm").then((m) => ({ default: m.WhyMegaPharm }))
);
const About = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.About }))
);
const FAQ = lazy(() =>
  import("@/pages/FAQ").then((m) => ({ default: m.FAQ }))
);
const News = lazy(() =>
  import("@/pages/News").then((m) => ({ default: m.News }))
);
const NewsDetail = lazy(() =>
  import("@/pages/NewsDetail").then((m) => ({ default: m.NewsDetail }))
);
const Blog = lazy(() =>
  import("@/pages/Blog").then((m) => ({ default: m.Blog }))
);
const BlogDetail = lazy(() =>
  import("@/pages/BlogDetail").then((m) => ({ default: m.BlogDetail }))
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.Contact }))
);
const Certificates = lazy(() =>
  import("@/pages/Certificates").then((m) => ({ default: m.Certificates }))
);
const Patents = lazy(() =>
  import("@/pages/Patents").then((m) => ({ default: m.Patents }))
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryId" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="why-mega-pharm" element={<WhyMegaPharm />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="patents" element={<Patents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
