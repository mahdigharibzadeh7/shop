//react-router-dom
import { Link } from "react-router-dom";

//icons
import { FaArrowLeftLong } from "react-icons/fa6";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center my-20 font-bold text-2xl">
      <div>Page Not Found!</div>
      <div className="py-5">404</div>
      <Link to="/products">
        <button className="flex items-center gap-x-2 bg-mainBgColor text-mainTxtColor px-3 py-1 rounded-lg text-lg">
          <FaArrowLeftLong />
          Back to Shop
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
