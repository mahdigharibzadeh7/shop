import { useState } from "react";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//services
import products_api from "../services/config";

//icons
import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ setProducts }) {
  const [search, setSearch] = useState("");

  const [, setSearchParams] = useSearchParams();

  const searchHandler = () => {
    if (search) {
      products_api.get().then((res) => {
        const newProducts = res.filter((product) =>
          product.title.toLowerCase().includes(search)
        );
        setProducts(newProducts);
      });

      setSearchParams({ search });
    } else products_api.get().then((res) => setProducts(res));

    setSearch("");
  };

  return (
    <div className="flex items- gap-x-3 mt-10">
      <input
        className="border-2 w-64 border-mainBgColor border-dashed rounded-lg px-3 py-1 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button
        className="bg-mainBgColor p-2 text-white text-xl rounded-lg"
        onClick={searchHandler}
      >
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
