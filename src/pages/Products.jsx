import { useEffect, useState } from "react";

//services
import products_api from "../services/config";

//components
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    products_api.get().then((res) => setProducts(res));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 my-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
