import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/models/appState.model";
import { Observable } from "rxjs";
import { IShoppingItem } from "src/app/store/models/IShoppingItem";
import { LoadShoppingAction } from "src/app/store/actions/shopping.actions";

@Component({
  selector: "shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: Observable<IShoppingItem[]>;
  loading: Observable<Boolean>;
  error: Observable<Error>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems = this.store.select(state => state.shopping.list);
    this.loading = this.store.select(state => state.shopping.loading);
    this.error = this.store.select(state => state.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }
}
