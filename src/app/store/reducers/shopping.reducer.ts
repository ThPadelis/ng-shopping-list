import { ShoppingItem } from "../models/shopping-item.model";
import {
  ShoppingACtion,
  ShoppingActionTypes
} from "../actions/shopping.actions";

const initialState: Array<ShoppingItem> = [
  new ShoppingItem("Coca Cola"),
  new ShoppingItem("Fanta Orange")
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingACtion
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.REMOVE_ITEM:
      let itemId = action.payload.id;
      return state.filter(item => item.id !== itemId);
    case ShoppingActionTypes.UPDATE_ITEM:
      let indexInState = state.findIndex(item => item.id === action.itemId);
      state[indexInState] = action.payload;
      return state;
    default:
      return state;
  }
}
