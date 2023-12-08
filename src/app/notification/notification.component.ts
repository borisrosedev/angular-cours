import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('messageContentEmitted', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notificationSubscription!:Subscription
  content!:string

  constructor(private notificationService:NotificationService){}

  // méthode
  ngOnInit(){
    this.notificationSubscription = this.notificationService.content$.subscribe((data) => {
      this.content = data
    })
  }

  // méthode
  ngOnDestroy(){
    this.notificationSubscription.unsubscribe()
  }

}
