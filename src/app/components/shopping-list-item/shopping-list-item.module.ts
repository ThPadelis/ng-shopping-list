import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListItemComponent } from "./shopping-list-item.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ShoppingListItemComponent],
  exports: [ShoppingListItemComponent]
})
export class ShoppingListItemModule {}
