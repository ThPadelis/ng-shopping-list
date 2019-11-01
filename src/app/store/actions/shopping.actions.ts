import { Action } from "@ngrx/store";
import { ShoppingItem } from "../models/shopping-item.model";

export enum ShoppingActionTypes {
  ADD_ITEM = "[Shopping] Add Item",
  REMOVE_ITEM = "[Shopping] Remove Item",
  UPDATE_ITEM = "[Shopping] Update Item"
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {}
}

export class RemoveItemAction {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;
  constructor(public payload: ShoppingItem) {}
}

export class UpdateItemAction {
  readonly type = ShoppingActionTypes.UPDATE_ITEM;
  constructor(public itemId: number, public payload: ShoppingItem) {}
}

export type ShoppingACtion =
  | AddItemAction
  | RemoveItemAction
  | UpdateItemAction;
