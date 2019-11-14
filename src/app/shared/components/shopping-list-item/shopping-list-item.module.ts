import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListItemComponent } from "./shopping-list-item.component";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [ShoppingListItemComponent],
  exports: [ShoppingListItemComponent]
})
export class ShoppingListItemModule {}
