//context
import { useCart } from "../contexts/CartContext";

//components
import CheckOutFactor from "../components/CheckOutFactor";
import CheckOutList from "../components/CheckOutList";

function CheckOut() {
  const [state] = useCart();
  return (
    <>
      {state.itemsCounter === 0 ? (
        <div className="text-center my-20 font-bold text-xl">
          There is no product in your cart yet!
        </div>
      ) : (
        <div className="grid grid-cols-12 mt-20">
          <CheckOutFactor />
          <CheckOutList />
        </div>
      )}
    </>
  );
}

export default CheckOut;
