export class ShoppingItem {
  static _id = 0;
  id: number;
  name: string;

  constructor(name: string) {
    this.id = ShoppingItem._id++;
    this.name = name;
  }
}
