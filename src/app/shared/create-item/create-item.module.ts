import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateItemComponent } from "./create-item.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateItemComponent],
  exports: [CreateItemComponent]
})
export class CreateItemModule {}
