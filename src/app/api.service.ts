import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getRecipe=()=>{
    return this.http.get("http://localhost:8080/viewRecipe")
  }

  postRecipe=(data:any)=>{
    return this.http.post("http://localhost:8080/addRecipe",data)
  }
}
