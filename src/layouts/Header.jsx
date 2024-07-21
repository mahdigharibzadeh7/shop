// icons
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between items-center bg-orange-500 px-7 py-5 rounded-lg mt-2">
      <div className="font-bold text-2xl">Shop</div>
      <div className="text-2xl">
        <FaCartShopping />
      </div>
    </div>
  );
}

export default Header;
