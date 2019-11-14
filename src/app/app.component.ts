import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/appState.model";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng-shopping-list";
  isLoading: Observable<Boolean>;
  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {
    translate.setDefaultLang("en-US");
  }

  ngOnInit() {
    this.isLoading = this.store.select(state => state.shopping.loading);
  }
}
