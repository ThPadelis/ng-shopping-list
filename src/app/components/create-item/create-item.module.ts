import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateItemComponent } from "./create-item.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CreateItemComponent],
  exports: [CreateItemComponent]
})
export class CreateItemModule {}
