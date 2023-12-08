import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DishCarteModel } from './interfaces/dish-carte-model';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  // injection de la dépendance
  constructor(private http:HttpClient) { }

  getCarte():Observable<DishCarteModel[]>{
    return this.http.get<any>('https://aston-server-app.onrender.com/api/carte')
  }


}
// la carte est un tableau d'objets de type DishCarteModel
