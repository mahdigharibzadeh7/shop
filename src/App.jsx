import { useState } from "react";

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

function App() {
  return (
    <Layout>
      <ProductProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* <Route
            path="/checkout"
            element={<CheckOut totalCount={totalCount} />}
          /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductProvider>
    </Layout>
  );
}

export default App;
