//react-router-dom
import { Link, useParams } from "react-router-dom";

//context
import { useProductDetails } from "../contexts/ProductContext";

//components
import Loader from "../components/Loader";

//icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { FaGg } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();

  const product = useProductDetails(+id);
  if (!product) return <Loader />;

  return (
    <div className="flex my-10">
      <div className="border-2 border-dashed border-mainBgColor rounded-[3rem] min-w-72 h-fit bg-white">
        <img
          className="max-w-60 mx-auto my-5"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="grid grid-cols-12 border-2 border-dashed border-zinc-300 rounded-[3rem] ml-10 p-7">
        <div className="col-span-9 w-[80%]">
          <div className="font-bold text-xl text-mainBgColor">
            {product.title}
          </div>
          <p className="my-7">{product.description}</p>
          <div className="flex items-center gap-x-2 font-bold">
            <FaGg className="text-mainBgColor text-lg" />
            {product.category}
          </div>
          <div className="flex items-center gap-x-2 font-bold">
            <IoMdPricetag className="text-mainBgColor text-lg" />$
            {product.price}
          </div>
        </div>
        <div className="col-span-3 content-end">
          <Link to="/">
            <button className="flex items-center gap-x-2 bg-mainBgColor text-mainTxtColor px-3 py-1 rounded-lg">
              <FaArrowLeftLong />
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
