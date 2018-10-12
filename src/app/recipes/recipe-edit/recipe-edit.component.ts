import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editForm: FormGroup;
  editMode = false;
  recipeId: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = params['id'];
        this.editMode = this.recipeId != null;

        let recipe: Recipe;
        if (this.editMode) {
          recipe = this.recipeService.getRecipe(this.recipeId);
        } else {
          recipe = Recipe.new();
        }

        this.initForm(recipe);
      });
  }

  private initForm(recipe: Recipe) {
    const ingredientsControl = new FormArray([]);
    recipe.ingredients.forEach(
      (i: Ingredient) => ingredientsControl.push(RecipeEditComponent.createNewIngredientControl(i.name, i.amount))
    );
    this.editForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'description': new FormControl(recipe.description),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'ingredients': ingredientsControl
    });
  }

  private static createNewIngredientControl(name: string, amount: number) {
    return new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, this.editForm.value);
    } else {
      this.recipeId = this.recipeService.addRecipe(this.editForm.value);
    }

    this.router.navigate(['recipes', this.recipeId]);
  }

  onAddIngredient() {
    this.getIngredientControls().push(RecipeEditComponent.createNewIngredientControl(null, null));
  }

  getIngredientControls() {
    return <FormArray>this.editForm.get('ingredients');
  }

  onDeleteIngredient(idx: number) {
    this.getIngredientControls().removeAt(idx);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onReset() {
    this.editForm.reset();
    this.getIngredientControls().controls = [];
    this.editMode = false;
  }

}
