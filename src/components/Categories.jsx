import { useEffect, useState } from "react";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//services
import products_api, {
  getCategories,
  getProductsByCategory,
} from "../services/config";

//icons
import { TfiMenuAlt } from "react-icons/tfi";

function Categories({ setProducts }) {
  const [buttonSelected, setButtonSelected] = useState("");
  const [category, setCategory] = useState(["All"]);

  const [, setCategoryParams] = useSearchParams();

  useEffect(() => {
    getCategories().then((res) =>
      setCategory((category) => [...category, ...res])
    );
  }, []);

  const selectHandler = (e) => {
    const value = e.target.innerText;
    setButtonSelected(value);

    if (value !== "All")
      getProductsByCategory(value).then((res) => setProducts(res));
    else products_api.get().then((res) => setProducts(res));

    setCategoryParams({ category: value });
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
              className={`${
                buttonSelected === category &&
                "bg-mainBgColor text-mainTxtColor"
              } text-left px-4 w-40 py-1 rounded-lg`}
              onClick={selectHandler}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
