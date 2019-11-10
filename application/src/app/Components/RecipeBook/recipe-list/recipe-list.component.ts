import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://www.iceorrice.com/wp-content/' +
      'uploads/2018/01/DSC00442-2.jpg'),
    new RecipeModel('A Test Recipe 2', 'This is simply a test 2', 'https://www.iceorrice.com/wp-content/' +
      'uploads/2018/01/DSC00442-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
