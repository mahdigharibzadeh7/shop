import { useState } from "react";

//icons
import { IoSearchSharp } from "react-icons/io5";

function SearchBox() {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log(search);
    setSearch("");
  };
  return (
    <div className="flex items- gap-x-3 mt-10">
      <input
        className="border-2 w-64 border-orange-500 border-dashed rounded-lg px-3 py-1 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-orange-500 p-2 text-white text-xl rounded-lg"
        onClick={searchHandler}
      >
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
