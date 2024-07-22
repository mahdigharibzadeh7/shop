import { useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";

function ProductCard({ product: { id, image, title, price } }) {
  const [isShop, setIsShop] = useState(false);
  const [count, setCount] = useState(0);

  const shopHandler = () => {
    setCount(1);
    setIsShop(true);
  };

  return (
    <div
      key={id}
      className="col-span-4 border-2 border-dashed border-zinc-300 rounded-xl bg-white"
    >
      <img className="w-36 h-40 mx-auto my-5" src={image} alt={title} />
      <div className="text-red-500 font-semibold ml-5 text-ellipsis overflow-hidden whitespace-nowrap mx-5">
        {title}
      </div>
      <div className="font-semibold ml-5 mt-3">${price}</div>
      <div className="flex justify-between items-center mx-5 mt-7 mb-5 text-2xl text-orange-500">
        <div>
          <Link to={`${id}`}>
            <TbListDetails />
          </Link>
        </div>
        {isShop ? (
          <div className="flex items-center">
            <button
              className="flex items-center justify-center bg-orange-500 rounded-lg text-white w-7 h-7 text-lg"
              onClick={() => setCount((count) => count - 1)}
            >
              {count === 1 ? <BsTrash onClick={() => setIsShop(false)} /> : "-"}
            </button>
            <span className="mx-5 text-black text-lg">{count}</span>
            <button
              className="flex items-center justify-center bg-orange-500 rounded-lg text-white w-7 h-7 text-lg"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
        ) : (
          <div className="bg-orange-500 text-white rounded-lg p-1">
            <TbShoppingBagCheck
              className="cursor-pointer"
              onClick={shopHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
