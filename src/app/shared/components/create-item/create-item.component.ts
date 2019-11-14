import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/models/appState.model";
import { AddShoppingItemAction } from "src/app/store/actions/shopping.actions";
import * as uuid from "uuid";

const nonWhitespaceRegExp: RegExp = new RegExp("\\S");

@Component({
  selector: "create-item",
  templateUrl: "./create-item.component.html",
  styleUrls: ["./create-item.component.scss"]
})
export class CreateItemComponent implements OnInit {
  createItemForm = this.formBuilder.group({
    createItem: [
      "",
      [Validators.required, Validators.pattern(nonWhitespaceRegExp)]
    ]
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.createItemForm.valid) {
      this.store.dispatch(
        new AddShoppingItemAction({ id: uuid(), name: this.createItem.value })
      );
      this.createItemForm.reset();
    }
  }

  get createItem() {
    return this.createItemForm.get("createItem");
  }
}
