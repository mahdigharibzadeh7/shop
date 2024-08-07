import { useEffect } from "react";

//context
import { useCart } from "../contexts/CartContext";

//components
import CheckOutFactor from "../components/CheckOutFactor";
import CheckOutList from "../components/CheckOutList";

//toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckOut() {
  const [state] = useCart();

  useEffect(() => {
    if (state.checkOut) toast.success("Your payment was successfully done!");
  }, [state.checkOut]);

  return (
    <>
      <ToastContainer />
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
