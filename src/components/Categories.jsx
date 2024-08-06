import { useEffect, useState } from "react";

//services
import { getCategories } from "../services/config";

//helpers
import { categoryCapitalization, createQueryObject } from "../helpers/helper";

//icons
import { TfiMenuAlt } from "react-icons/tfi";

function Categories({ queryCategory, setQuery }) {
  const [buttonSelected, setButtonSelected] = useState("");
  const [category, setCategory] = useState(["all"]);

  useEffect(() => {
    getCategories().then((res) =>
      setCategory((category) => [...category, ...res])
    );
    setButtonSelected(queryCategory || "all");
  }, []);

  const selectHandler = (e) => {
    const value = e.target.innerText.toLowerCase();
    setButtonSelected(value);
    setQuery((query) => createQueryObject(query, { category: value }));
  };

  return (
    <div className="col-span-2 h-fit border-2 border-zinc-300 border-dashed rounded-lg bg-white px-6 py-3">
      <div className="flex items-center gap-x-2 text-mainBgColor font-bold">
        <TfiMenuAlt />
        Categories
      </div>
      <ul className="font-medium">
        {category.map((category) => (
          <li className="py-1" key={category}>
            <button
              className={`hover:text-mainBgColor ${
                buttonSelected === category &&
                "bg-mainBgColor text-mainTxtColor hover:text-mainTxtColor"
              } text-left px-2 w-40 py-1 rounded-lg`}
              onClick={selectHandler}
            >
              {categoryCapitalization(category)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
