import { createContext, useEffect, useState } from "react";

//services
import products_api from "../services/config";

//components
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import Loader from "../components/Loader";

//context
export const ProductsProvider = createContext();

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    products_api.get().then((res) => setProducts(res));
  }, []);
  return (
    <ProductsProvider.Provider value={{ products, setProducts }}>
      <SearchBox />
      {products.length ? (
        <div className="grid grid-cols-11 gap-x-5 my-10">
          <div className="col-span-9 grid grid-cols-12 gap-5">
            <ProductCard />
          </div>
          <Categories />
        </div>
      ) : (
        <Loader />
      )}
    </ProductsProvider.Provider>
  );
}

export default Products;
