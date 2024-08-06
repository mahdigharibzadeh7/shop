import { useState } from "react";

//components
import ShopButtons from "./ShopButtons";

//context
import { useCart } from "../contexts/CartContext";

//helpers
import { shortenText } from "../helpers/helper";

function CheckOutList() {
  const [count, setCount] = useState(0);
  const [isShop, setIsShop] = useState(false);

  const [state, dispatch] = useCart();

  return (
    <div className="col-span-9">
      {state.selectedItems.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center px-5 py-7 my-3 border-2 border-dashed border-zinc-300 rounded-2xl"
        >
          <div>
            <img
              className="w-12 h-12"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-48">
            {shortenText(product.title)}
          </div>
          <ShopButtons
            count={product.quantity}
            setCount={setCount}
            setIsShop={setIsShop}
            dispatch={dispatch}
            rating={product.rating}
            product={product}
          />
        </div>
      ))}
    </div>
  );
}

export default CheckOutList;
