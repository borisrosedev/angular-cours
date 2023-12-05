import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DishModel } from './interfaces/dish-model';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // menu!:Array<Array<any>>
  menues!:Array<DishModel>[]
 
  constructor(private http:HttpClient) {}
  getMenues(){
    // retourne un Observable
    return this.http.get('https://aston-server-app.onrender.com/api/menu')
  }









}
