import { createContext, useContext, useEffect, useState } from "react";

//services
import products_api from "../services/config";

//context
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await products_api.get();
        setProducts(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  return products.find((item) => item.id === id);
};

export default ProductProvider;
export { useProduct, useProductDetails };
