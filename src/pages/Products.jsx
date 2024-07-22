import { useEffect, useState } from "react";

//services
import products_api from "../services/config";

//components
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    products_api.get().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <SearchBox setProducts={setProducts} />
      {products.length ? (
        <div className="grid grid-cols-10 gap-x-5 my-10">
          <div className="col-span-8 grid grid-cols-12 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Categories setProducts={setProducts} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Products;
