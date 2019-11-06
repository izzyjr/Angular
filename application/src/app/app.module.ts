import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './Components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/RecipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Components/RecipeBook/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import {HeaderComponent} from './Components/header/header.component';
import { RecipesComponent } from './Components/RecipeBook/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
