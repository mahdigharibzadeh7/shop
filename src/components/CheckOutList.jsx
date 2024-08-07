//components
import ShopButtons from "./ShopButtons";

//context
import { useCart } from "../contexts/CartContext";

//helpers
import { shortenText } from "../helpers/helper";

function CheckOutList() {
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
          <div>
            {shortenText(product.title)} - ${product.price}
          </div>
          <ShopButtons
            quantity={product.quantity}
            dispatch={dispatch}
            product={product}
          />
        </div>
      ))}
    </div>
  );
}

export default CheckOutList;
