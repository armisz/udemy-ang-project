import {IngredientCombinePipe} from './ingredient-combine.pipe';
import {Ingredient} from './ingredient.model';

describe('IngredientCombinePipe', () => {
  it('should do the right thing', () => {
    let pipe = new IngredientCombinePipe();
    expect(pipe.transform(new Ingredient('Apple', 7))).toEqual('Apple (7)');
  });
});
