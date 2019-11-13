import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BotNavbarComponent } from "./bot-navbar.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BotNavbarComponent],
  exports: [BotNavbarComponent]
})
export class BotNavbarModule {}
