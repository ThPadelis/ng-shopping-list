import { NgModule } from "@angular/core";
import { NavbarModule } from "./components/navbar/navbar.module";
import { BotNavbarModule } from "./components/bot-navbar/bot-navbar.module";
import { CreateItemModule } from "./components/create-item/create-item.module";
import { ShoppingListModule } from "./components/shopping-list/shopping-list.module";

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
