import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DishModel } from './interfaces/dish-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // menu!:Array<Array<any>>
  menues!:Array<DishModel>[]
 
  constructor(private http:HttpClient) {}
  getMenues(): Observable<any>{
    // retourne un Observable
    return this.http.get<any>('https://aston-server-app.onrender.com/api/menu')
  }

  getOneMenuFromId(id:number){
    return this.http.get<any>('https://aston-server-app.onrender.com/api/menu/' + id)
  }


}
