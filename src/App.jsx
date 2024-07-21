//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//Layout
import Layout from "./layouts/Layout";
import Products from "./pages/Products";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
