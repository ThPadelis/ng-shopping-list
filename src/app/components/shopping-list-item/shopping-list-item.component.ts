import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { ShoppingItem } from "src/app/store/models/shopping-item.model";
import { AppState } from "src/app/store/models/app-state.model";
import { Store } from "@ngrx/store";
import {
  RemoveItemAction,
  UpdateItemAction
} from "src/app/store/actions/shopping.actions";

@Component({
  selector: "shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"]
})
export class ShoppingListItemComponent implements OnInit {
  @Input("item") item: ShoppingItem;

  isEdit: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onCopy() {
    const selectionBox = document.createElement("textarea");
    selectionBox.style.position = "fixed";
    selectionBox.style.top = "0";
    selectionBox.style.left = "0";
    selectionBox.style.opacity = "0";
    selectionBox.value = this.item.name;
    document.body.appendChild(selectionBox);
    selectionBox.focus();
    selectionBox.select();
    document.execCommand("copy");
    document.body.removeChild(selectionBox);
    alert("Item copied to clipboard");
  }

  onEdit(item: ShoppingItem) {
    this.isEdit = false;
    this.store.dispatch(new UpdateItemAction(item.id, this.item));
  }

  onRemove() {
    let deleteItem = confirm("Are you sure you want to delete this item?");

    if (deleteItem) {
      this.store.dispatch(new RemoveItemAction(this.item));
    }
  }
}
