import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListItemModule } from "../shopping-list-item/shopping-list-item.module";

@NgModule({
  imports: [CommonModule, ShoppingListItemModule],
  declarations: [ShoppingListComponent],
  exports: [ShoppingListComponent]
})
export class ShoppingListModule {}
