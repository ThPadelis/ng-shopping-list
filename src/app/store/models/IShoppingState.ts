import { IShoppingItem } from "./IShoppingItem";

export interface IShoppingState {
  list: IShoppingItem[];
  loading: boolean;
  error: Error;
}
