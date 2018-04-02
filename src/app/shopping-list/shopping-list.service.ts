import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];
  //private ingredients: Ingredient[] = Ingredient.testData();

  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();

  constructor() {
  }

  private fireIngredientsChanged() {
    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(idx: number) {
    return this.ingredients[idx];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.fireIngredientsChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.fireIngredientsChanged();
  }

  updateIngredient(idx: number, ingredient: Ingredient) {
    this.ingredients[idx] = ingredient;
    this.fireIngredientsChanged();
  }

  deleteIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.fireIngredientsChanged();
  }

}
