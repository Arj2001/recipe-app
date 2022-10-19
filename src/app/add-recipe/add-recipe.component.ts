import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  recipe_name = ""
  ingredients = ""
  category = ""
  duration = ""

  readValues=()=>{
    let data = {
      "recipe_name":this.recipe_name,
    "ingredients":this.ingredients,
    "category":this.category,
    "duration":this.duration,
    }
    console.log(data)
    this.myApi.postRecipe(data).subscribe(
      (response)=>{
        
      }
    )
    alert("Value inserted")
    this.recipe_name = ""
    this.ingredients = ""
    this.category = ""
    this.duration = ""
  }

  ngOnInit(): void {
  }

}
