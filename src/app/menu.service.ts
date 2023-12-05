import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) {}

  getMenues(){
    // Je souscris à l'observebale  this.http.get('https://aston-server-app.onrender.com/api/menu')
    // et je récupère les données
    this.http.get('https://aston-server-app.onrender.com/api/menu').subscribe((data) => {
      console.log('menues', data)
    })
  }




}
