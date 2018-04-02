import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [];
  //private recipes: Recipe[] = Recipe.testData();

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private fireRecipesChanged() {
    this.recipesChanged.next(this.getRecipes());
  }

  getRecipes() {
    return this.recipes.slice(); // defensive copy
  }

  getRecipe(id: number) {
    return this.recipes[id - 1];
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

  private findIndex(recipe: Recipe) {
    const idx = this.recipes.indexOf(recipe, 0);
    if (idx == -1) {
      throw new Error('Unknown recipe: ' + recipe);
    }
    return idx;
  }

  deleteRecipe(recipe: Recipe) {
    const idx = this.findIndex(recipe);
    this.recipes.splice(idx, 1);
    this.fireRecipesChanged();
  }

  addRecipe(recipe: Recipe) {
    const idx = this.recipes.push(recipe) - 1;
    this.fireRecipesChanged();
    return idx;
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id - 1] = recipe;
    this.fireRecipesChanged();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.fireRecipesChanged();
  }

}
