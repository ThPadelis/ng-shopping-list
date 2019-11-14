import { NgModule } from "@angular/core";
import { NavbarModule } from "./navbar/navbar.module";
import { BotNavbarModule } from "./bot-navbar/bot-navbar.module";
import { CreateItemModule } from "./create-item/create-item.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
  imports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListModule
  ],
  exports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {}
