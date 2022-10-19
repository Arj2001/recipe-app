import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.putRecipeData()
  }

  putRecipeData=()=>{
    this.myApi.getRecipe().subscribe(
    (data)=>{
      this.recipeData = data;
    }
    )
  }

  recipeData:any = []

  ngOnInit(): void {
  }

}
