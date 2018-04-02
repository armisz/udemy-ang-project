import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  private static RECIPE_DATABASE = 'https://udemy-2a85f.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.httpClient
      .put(DataStorageService.RECIPE_DATABASE, this.recipeService.getRecipes(),
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),  // default
        })
      .subscribe(
        () => {
        },
        (error) => alert(error));
  }

  loadRecipes() {
    this.httpClient
      .get<Recipe[]>(DataStorageService.RECIPE_DATABASE)
      .map((recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        (error) => alert(error));
  }
}
