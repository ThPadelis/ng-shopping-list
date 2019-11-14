import { Action } from "@ngrx/store";
import { IShoppingItem } from "../models/IShoppingItem";

export enum ShoppingActionTypes {
  LOAD_SHOPPING = "[Shopping] Loading Shoping",
  LOAD_SHOPPING_SUCCESS = "[Shopping] Loading Shoping Success",
  LOAD_SHOPPING_FAIL = "[Shopping] Loading Fail",
  ADD_ITEM = "[Shopping] Add Item",
  ADD_ITEM_SUCCESS = "[Shopping] Add Item Success",
  ADD_ITEM_FAIL = "[Shopping] Add Item Fail",
  REMOVE_ITEM = "[Shopping] Remove Item",
  REMOVE_ITEM_SUCCESS = "[Shopping] Remove Item Success",
  REMOVE_ITEM_FAIL = "[Shopping] Remove Item Fail"
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: IShoppingItem[]) {}
}

export class LoadShoppingFailAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAIL;
  constructor(public payload: Error) {}
}

export class AddShoppingItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: IShoppingItem) {}
}

export class AddShoppingItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: IShoppingItem) {}
}

export class AddShoppingItemFailAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAIL;
  constructor(public payload: Error) {}
}

export class RemoveShoppingActionItem implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;
  constructor(public payload: string) {}
}

export class RemoveShoppingItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_SUCCESS;
  constructor(public payload: string) {}
}

export class RemoveShoppingItemFailAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_FAIL;
  constructor(public payload: string) {}
}

export type ShoppingAction =
  | AddShoppingItemAction
  | AddShoppingItemSuccessAction
  | AddShoppingItemFailAction
  | RemoveShoppingActionItem
  | RemoveShoppingItemSuccessAction
  | RemoveShoppingItemFailAction
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailAction;
