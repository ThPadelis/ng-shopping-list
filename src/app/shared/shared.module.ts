import { NgModule } from "@angular/core";
import { NavbarModule } from "./navbar/navbar.module";
import { BotNavbarModule } from "./bot-navbar/bot-navbar.module";

@NgModule({
  imports: [NavbarModule, BotNavbarModule],
  exports: [NavbarModule, BotNavbarModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
