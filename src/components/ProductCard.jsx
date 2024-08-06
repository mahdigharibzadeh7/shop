import { useState } from "react";

//components
import ShopButtons from "./ShopButtons";

//react-router-dom
import { Link } from "react-router-dom";

//helpers
import { shortenText } from "../helpers/helper";

//context
import { useCart } from "../contexts/CartContext";

//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

function ProductCard({ product }) {
  const [isShop, setIsShop] = useState(false);
  const [count, setCount] = useState(0);

  const { id, image, title, price, rating } = product;

  const [, dispatch] = useCart();

  const shopHandler = () => {
    setIsShop(true);
    setCount(1);
    dispatch({ type: "FIRST_BUY", payload: product });
  };

  return (
    <div
      key={id}
      className="col-span-4 border-2 border-dashed border-zinc-300 rounded-xl bg-white"
    >
      <img className="w-36 h-40 mx-auto my-5" src={image} alt={title} />
      <div className="text-red-500 font-semibold ml-5 mx-5">
        {shortenText(title)}
      </div>
      <div className="font-semibold ml-5 mt-3">${price}</div>
      <div className="flex justify-between items-center mx-5 mt-7 mb-5 text-2xl text-mainBgColor">
        <div>
          <Link to={`${id}`}>
            <TbListDetails />
          </Link>
        </div>
        {isShop ? (
          <ShopButtons
            count={count}
            setCount={setCount}
            setIsShop={setIsShop}
            dispatch={dispatch}
            rating={rating}
            product={product}
          />
        ) : (
          <div className="bg-mainBgColor text-mainTxtColor rounded-lg p-1">
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
