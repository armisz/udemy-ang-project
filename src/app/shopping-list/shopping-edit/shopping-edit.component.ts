import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private  shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe(
      (idx: number) => {
        this.editMode = true;
        this.editedItemIndex = idx;

        const editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
        this.editForm.setValue({
          name: editedItem.name,
          amount: editedItem.amount
        });
      });
  }

  onSubmit() {
    const value = this.editForm.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onReset();
  }

  onReset() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onReset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
