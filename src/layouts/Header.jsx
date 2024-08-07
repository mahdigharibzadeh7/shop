//context
import { useCart } from "../contexts/CartContext";

// icons
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  const [state] = useCart();

  return (
    <div className="flex justify-between items-center bg-mainBgColor text-mainTxtColor px-7 py-5 rounded-lg mt-2">
      <div className="font-bold text-2xl">
        <Link to="/products">Shop</Link>
      </div>
      <div className="text-2xl relative">
        <Link to="/checkout">
          <FaCartShopping />
          {state.itemsCounter > 0 && (
            <div className="absolute -top-5 -right-4 bg-black rounded-full px-2 text-base">
              {state.itemsCounter}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
