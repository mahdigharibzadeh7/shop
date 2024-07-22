//components
import CheckOutFactor from "../components/CheckOutFactor";
import CheckOutList from "../components/CheckOutList";

function CheckOut() {
  return (
    <div className="grid grid-cols-12 mt-20">
      <CheckOutFactor />
      <CheckOutList />
    </div>
  );
}

export default CheckOut;
