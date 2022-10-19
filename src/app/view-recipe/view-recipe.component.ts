import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor() { }

  recipeData:any = [{"recipe_name":"chicken 65","ingredients":"chicken,oil,masala","category":"non veg","duration":"3 hour"}]

  ngOnInit(): void {
  }

}
