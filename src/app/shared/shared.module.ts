import { NgModule } from "@angular/core";
import { NavbarModule } from "./navbar/navbar.module";
import { BotNavbarModule } from "./bot-navbar/bot-navbar.module";
import { CreateItemModule } from "./create-item/create-item.module";
import { ShoppingListItemModule } from "./shopping-list-item/shopping-list-item.module";

@NgModule({
  imports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListItemModule
  ],
  exports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListItemModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {}
