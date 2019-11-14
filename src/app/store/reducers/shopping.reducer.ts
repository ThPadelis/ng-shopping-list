import { IShoppingItem } from "../models/IShoppingItem";
import {
  ShoppingAction,
  ShoppingActionTypes
} from "../actions/shopping.actions";
import * as uuid from "uuid/v4";
import { IShoppingState } from "../models/IShoppingState";

const initialState: IShoppingState = {
  list: [
    {
      id: uuid(),
      name: "coca cola"
    }
  ],
  loading: false,
  error: undefined
};

export function ShoppingReducer(
  state: IShoppingState = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ShoppingActionTypes.LOAD_SHOPPING_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case ShoppingActionTypes.ADD_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.REMOVE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(
          (item: IShoppingItem) => item.id !== action.payload
        ),
        loading: false
      };
    case ShoppingActionTypes.REMOVE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
