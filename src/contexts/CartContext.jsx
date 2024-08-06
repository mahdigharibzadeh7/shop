import { createContext, useContext, useReducer } from "react";

//helpers
import { price_counter_calc } from "../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FIRST_BUY":
      if (!state.selectedItems.find((item) => item.id === action.payload.id))
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      return {
        ...state,
        ...price_counter_calc(state.selectedItems),
        checkOut: false,
      };
    case "ADD_ITEM":
      const addIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[addIndex].quantity++;
      return {
        ...state,
        ...price_counter_calc(state.selectedItems),
        checkOut: false,
      };
    case "MINUS_ITEM":
      const minusIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[minusIndex].quantity--;
      return {
        ...state,
        ...price_counter_calc(state.selectedItems),
        checkOut: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...price_counter_calc(newSelectedItems),
        checkOut: false,
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkOut: true,
      };

    default:
      throw new Error("Invalid action");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
