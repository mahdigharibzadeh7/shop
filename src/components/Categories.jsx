//cotext
import { useContext } from "react";
import { ProductsProvider } from "../pages/Products";

//icons
import { TfiMenuAlt } from "react-icons/tfi";

function Categories() {
  const category = [];

  const { products } = useContext(ProductsProvider);

  const unique = products.filter((obj, index) => {
    return index === products.findIndex((o) => obj.category === o.category);
  });

  unique.map((u) => category.push(u.category));

  return (
    <div className="col-span-2 h-fit border-2 border-zinc-300 border-dashed rounded-lg bg-white px-6 py-3">
      <div className="flex items-center gap-x-2 text-orange-500 font-bold">
        <TfiMenuAlt />
        Categories
      </div>
      <ul className="font-medium">
        <li className="pt-2">All</li>
        {category.map((category) => (
          <li className="py-1" key={category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
