import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Products } from "@/pages/Products";
import { ProductDetail } from "@/pages/ProductDetail";
import { Cart } from "@/pages/Cart";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { WhyMegaPharm } from "@/pages/WhyMegaPharm";
import { About } from "@/pages/About";
import { FAQ } from "@/pages/FAQ";
import { News } from "@/pages/News";
import { NewsDetail } from "@/pages/NewsDetail";
import { Blog } from "@/pages/Blog";
import { BlogDetail } from "@/pages/BlogDetail";
import { Contact } from "@/pages/Contact";
import "@/i18n";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
