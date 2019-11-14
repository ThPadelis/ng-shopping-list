import { IShoppingItem } from "../models/IShoppingItem";
import {
  ShoppingAction,
  ShoppingActionTypes
} from "../actions/shopping.actions";
import * as uuid from "uuid/v4";

const initialState: IShoppingItem[] = [
  {
    id: uuid(),
    name: "coca cola"
  }
];

export function ShoppingReducer(
  state: IShoppingItem[] = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.REMOVE_ITEM:
      return state.filter((item: IShoppingItem) => item.id !== action.payload);
    default:
      return state;
  }
}
