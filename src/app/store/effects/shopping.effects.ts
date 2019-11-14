import { Injectable } from "@angular/core";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  ShoppingActionTypes,
  LoadShoppingAction,
  LoadShoppingSuccessAction,
  LoadShoppingFailAction,
  AddShoppingItemAction,
  AddShoppingItemSuccessAction,
  AddShoppingItemFailAction,
  RemoveShoppingItemAction,
  RemoveShoppingItemSuccessAction,
  RemoveShoppingItemFailAction
} from "../actions/shopping.actions";
import { ShoppingService } from "src/app/shared/services/shopping.service";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class ShoppingEffects {
  constructor(
    private actions: Actions,
    private shoppingService: ShoppingService
  ) {}

  @Effect() loadShopping = this.actions.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() => {
      return this.shoppingService.getItems().pipe(
        map(data => new LoadShoppingSuccessAction(data)),
        catchError(error => of(new LoadShoppingFailAction(error)))
      );
    })
  );

  @Effect() addItem = this.actions.pipe(
    ofType<AddShoppingItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap(data => {
      return this.shoppingService.createItem(data.payload).pipe(
        map(() => new AddShoppingItemSuccessAction(data.payload)),
        catchError(error => of(new AddShoppingItemFailAction(error)))
      );
    })
  );

  @Effect() removeItem = this.actions.pipe(
    ofType<RemoveShoppingItemAction>(ShoppingActionTypes.REMOVE_ITEM),
    mergeMap(data => {
      return this.shoppingService.deleteItem(data.payload).pipe(
        map(() => new RemoveShoppingItemSuccessAction(data.payload)),
        catchError(error => of(new RemoveShoppingItemFailAction(error)))
      );
    })
  );
}
