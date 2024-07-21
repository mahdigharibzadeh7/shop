//react-router-dom
import { Link } from "react-router-dom";

//context
import { useContext } from "react";
import { ProductsProvider } from "../pages/Products";

//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

function ProductCard() {
  const { products } = useContext(ProductsProvider);
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="col-span-4 border-2 border-dashed border-zinc-300 rounded-xl bg-white"
        >
          <img
            className="w-36 h-48 mx-auto my-5"
            src={product.image}
            alt={product.title}
          />
          <div className="text-red-500 font-semibold ml-5 text-ellipsis overflow-hidden whitespace-nowrap mx-5">
            {product.title}
          </div>
          <div className="font-semibold ml-5 mt-3">${product.price}</div>
          <div className="flex justify-between items-center mx-5 mt-7 mb-3 text-2xl text-orange-500">
            <div>
              <Link to={`${product.id}`}>
                <TbListDetails />
              </Link>
            </div>
            <div className="bg-orange-500 text-white rounded-lg p-1">
              <TbShoppingBagCheck />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
