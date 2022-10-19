import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const addRoute:Routes=[
  {
    path:"",component:AddRecipeComponent
  },
  {
    path:"view-recipe",component:ViewRecipeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewRecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
