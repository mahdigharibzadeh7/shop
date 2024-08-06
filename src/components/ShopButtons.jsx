//helpers
import { counterHandler } from "../helpers/helper";

//icons
import { BsTrash } from "react-icons/bs";

function ShopButtons({
  count,
  setCount,
  setIsShop,
  dispatch,
  rating,
  product,
}) {
  return (
    <div className="flex items-center">
      <button
        className="flex items-center justify-center bg-mainBgColor rounded-lg text-mainTxtColor w-7 h-7 text-lg"
        onClick={() =>
          counterHandler("minus", count, setCount, dispatch, rating, product)
        }
      >
        {count === 1 ? (
          <BsTrash
            onClick={() => {
              setIsShop(false);
              dispatch({ type: "REMOVE_ITEM", payload: product });
            }}
          />
        ) : (
          "-"
        )}
      </button>
      <span className="mx-5 text-black text-lg">{count}</span>
      <button
        className="flex items-center justify-center bg-mainBgColor rounded-lg text-mainTxtColor w-7 h-7 text-lg"
        onClick={() =>
          counterHandler("plus", count, setCount, dispatch, rating, product)
        }
      >
        +
      </button>
    </div>
  );
}

export default ShopButtons;
