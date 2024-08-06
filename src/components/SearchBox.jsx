//react-router-dom
import { useSearchParams } from "react-router-dom";

//icons
import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ search, setSearch, setQuery }) {

  const [, setSearchParams] = useSearchParams();

  const searchHandler = () => {
      setSearchParams({ search });
      setQuery((query) => ({ ...query, search }));

    // setSearch("");
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
