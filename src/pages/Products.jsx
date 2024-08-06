import { useEffect, useState } from "react";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//components
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import Loader from "../components/Loader";

//context
import { useProduct } from "../contexts/ProductContext";

//helpers
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";

function Products() {
  const products = useProduct();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearch(query.search || "");
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      {displayed.length ? (
        <div className="grid grid-cols-10 gap-x-5 my-10">
          <div className="col-span-8 grid grid-cols-12 gap-5">
            {displayed.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Categories queryCategory={query.category} setQuery={setQuery} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Products;
