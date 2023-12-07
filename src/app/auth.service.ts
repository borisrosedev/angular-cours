import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject:BehaviorSubject<any> = new BehaviorSubject<any>({})
  user$ = this.userSubject.asObservable()
  userSubscription!:Subscription

  constructor(private http: HttpClient, private notificationService:NotificationService) { }

  login(email: string, password: string) {
    // Spécifiez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.userSubscription = this.http.post('https://aston-server-app.onrender.com/api/user', {
      "email": email,
      "password": password
    }, { headers: headers }).subscribe((data) => {
        this.userSubject.next({...data})
    })

    

  }

  logout(){
    this.userSubject.next({})
    this.notificationService.sendMessage('Utilisateur déconnecté')
  }
}
