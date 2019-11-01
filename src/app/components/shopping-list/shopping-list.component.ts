import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ShoppingItem } from "src/app/store/models/shopping-item.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/models/app-state.model";

@Component({
  selector: "shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }
}
