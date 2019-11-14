import { Component, OnInit, Input } from "@angular/core";
import { IShoppingItem } from "src/app/store/models/IShoppingItem";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/models/appState.model";
import { RemoveShoppingActionItem } from "src/app/store/actions/shopping.actions";

@Component({
  selector: "shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.scss"]
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item: IShoppingItem;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onRemove(id: string) {
    this.store.dispatch(new RemoveShoppingActionItem(id));
  }
}
