import { NgModule } from "@angular/core";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { CreateItemModule } from "./create-item/create-item.module";

@NgModule({
  imports: [ShoppingListModule, CreateItemModule],
  exports: [ShoppingListModule, CreateItemModule]
})
export class ComponentsModule {}
