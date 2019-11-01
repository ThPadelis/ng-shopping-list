import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/models/app-state.model";
import { AddItemAction } from "src/app/store/actions/shopping.actions";
import { ShoppingItem } from "src/app/store/models/shopping-item.model";

@Component({
  selector: "create-item",
  templateUrl: "./create-item.component.html",
  styleUrls: ["./create-item.component.css"]
})
export class CreateItemComponent implements OnInit {
  newShoppingItem: string = "";
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitItem() {
    if (this.newShoppingItem.trim() !== "") {
      this.store.dispatch(
        new AddItemAction(new ShoppingItem(this.newShoppingItem.trim()))
      );
      this.newShoppingItem = "";
    }
  }
}
