//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Layout from "./layouts/Layout";

//pages
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import PageNotFound from "./pages/404";

//context
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <Layout>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </Layout>
  );
}

export default App;
