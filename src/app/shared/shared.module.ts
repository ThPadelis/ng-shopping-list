import { NgModule } from "@angular/core";
import { NavbarModule } from "./components/navbar/navbar.module";
import { BotNavbarModule } from "./components/bot-navbar/bot-navbar.module";
import { CreateItemModule } from "./components/create-item/create-item.module";
import { ShoppingListModule } from "./components/shopping-list/shopping-list.module";
import { LoadingModule } from "./components/loading/loading.module";

@NgModule({
  imports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListModule,
    LoadingModule
  ],
  exports: [
    NavbarModule,
    BotNavbarModule,
    CreateItemModule,
    ShoppingListModule,
    LoadingModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {}
