import { useEffect, useState } from "react";
import products_api from "../services/config";

function CheckOutList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    products_api.get().then((res) => setProduct(res));
  }, []);

  return (
    <div className="col-span-9">
      {product.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center px-5 py-7 my-3 border-2 border-dashed border-zinc-300 rounded-2xl"
        >
          <div>
            <img className="w-12 h-12" src={p.image} alt={p.title} />
          </div>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-48">
            {p.title}
          </div>
          <div className="flex items-center">
            <button className="flex items-center justify-center bg-mainBgColor rounded-lg text-mainTxtColor w-7 h-7 text-lg">
              -
            </button>
            <span className="mx-3 text-black text-lg">1</span>
            <button className="flex items-center justify-center bg-mainBgColor rounded-lg text-mainTxtColor w-7 h-7 text-lg">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CheckOutList;
