import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  content:BehaviorSubject<string> = new BehaviorSubject<string>('')
  content$ = this.content.asObservable();

  constructor() { }

  sendMessage(newContent:string){
    this.content.next(newContent)
    setTimeout(() => {
      this.content.next('')
    }, 3000)
  }
}
