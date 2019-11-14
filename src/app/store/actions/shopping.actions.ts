import { Action } from "@ngrx/store";
import { IShoppingItem } from "../models/IShoppingItem";

export enum ShoppingActionTypes {
  ADD_ITEM = "[Shopping] Add Item",
  REMOVE_ITEM = "Shopping Remove Item"
}

export class AddShoppingItem implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: IShoppingItem) {}
}

export class RemoveShoppingItem implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;
  constructor(public payload: string) {}
}

export type ShoppingAction = AddShoppingItem | RemoveShoppingItem;
