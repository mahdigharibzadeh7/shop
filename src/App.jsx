//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Layout from "./layouts/Layout";

//pages
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Layout>
  );
}

export default App;
