import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListItemComponent } from "./shopping-list-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ShoppingListItemComponent],
  exports: [ShoppingListItemComponent]
})
export class ShoppingListItemModule {}
