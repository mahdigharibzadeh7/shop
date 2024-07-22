// icons
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center bg-mainBgColor text-mainTxtColor px-7 py-5 rounded-lg mt-2">
      <div className="font-bold text-2xl">
        <Link to="/">Shop</Link>
      </div>
      <div className="text-2xl">
        <Link to="/checkout">
          <FaCartShopping />
        </Link>
      </div>
    </div>
  );
}

export default Header;
