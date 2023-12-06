import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  // injection de la dépendance
  constructor(private http:HttpClient) { }

  getCarte():Observable<any>{
    return this.http.get<any>('https://aston-server-app.onrender.com/api/carte')
  }


}
