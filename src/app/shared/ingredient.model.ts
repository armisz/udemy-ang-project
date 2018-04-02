export class Ingredient {
  constructor(public name: string,
              public amount: number) {
  }

  static testData() {
    return [
      new Ingredient('Apple', 7),
      new Ingredient('Tomato', 10),
    ]
  }
}
