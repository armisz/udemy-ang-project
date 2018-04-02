import {Pipe, PipeTransform} from '@angular/core';
import {Ingredient} from './ingredient.model';

@Pipe({
  name: 'combine'
})
export class IngredientCombinePipe implements PipeTransform {

  transform(ingredient: Ingredient) {
    return ingredient.name + ' (' + ingredient.amount + ')';
  }
}
