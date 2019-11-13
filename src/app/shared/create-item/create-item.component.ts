import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.createItemForm.valid) {
      console.warn(this.createItemForm.value);
    }
  }

  get createItem() {
    return this.createItemForm.get("createItem");
  }
}
