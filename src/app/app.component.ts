import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/models/appState.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng-shopping-list";
  isLoading: Observable<Boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoading = this.store.select(state => state.shopping.loading);
  }
}
