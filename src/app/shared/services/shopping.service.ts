import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { IShoppingItem } from "src/app/store/models/IShoppingItem";

@Injectable({
  providedIn: "root",
})
export class ShoppingService {
  private baseURL = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) {}

  createItem(item: IShoppingItem) {
    return this.http.post(this.baseURL, item).pipe(delay(250));
  }

  getItems() {
    return this.http.get<IShoppingItem[]>(this.baseURL).pipe(delay(250));
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(delay(250));
  }
}
