import { NgModule } from "@angular/core";
import { NavbarModule } from "./navbar/navbar.module";
import { BotNavbarModule } from "./bot-navbar/bot-navbar.module";
import { CreateItemModule } from "./create-item/create-item.module";

@NgModule({
  imports: [NavbarModule, BotNavbarModule, CreateItemModule],
  exports: [NavbarModule, BotNavbarModule, CreateItemModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
