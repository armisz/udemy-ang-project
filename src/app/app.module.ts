import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeService} from './recipes/recipe.service';
import {IngredientCombinePipe} from './shared/ingredient-combine.pipe';
import {ShortenPipe} from './shared/shorten.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import {SignUpComponent} from './auth/signup/signup.component';
import {SignInComponent} from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthInterceptor} from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ErrorPageComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    IngredientCombinePipe,
    ShortenPipe,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
