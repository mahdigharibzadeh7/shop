//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Layout from "./layouts/Layout";

//pages
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
