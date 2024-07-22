import { useState } from "react";

//services
import products_api from "../services/config";

//icons
import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ setProducts }) {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    if (search) {
      products_api.get().then((res) => {
        const newProducts = res.filter((product) =>
          product.title.toLowerCase().includes(search)
        );
        setProducts(newProducts);
      });
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
