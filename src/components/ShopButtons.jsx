//helpers
import { counterHandler } from "../helpers/helper";

//icons
import { BsTrash } from "react-icons/bs";
import Button from "./Button";

function ShopButtons({ quantity, dispatch, product }) {
  return (
    <div className="flex items-center">
      {quantity === 1 && (
        <Button
          onclickHandler={() => {
            dispatch({ type: "REMOVE_ITEM", payload: product });
          }}
          innerText={<BsTrash />}
        />
      )}
      {quantity > 1 && (
        <Button
          onclickHandler={() => counterHandler("MINUS_ITEM", product, dispatch)}
          innerText={"-"}
        />
      )}
      <span className="mx-5 text-black text-lg">{quantity}</span>
      <Button
        onclickHandler={() => counterHandler("ADD_ITEM", product, dispatch)}
        innerText={"+"}
      />
    </div>
  );
}

export default ShopButtons;
