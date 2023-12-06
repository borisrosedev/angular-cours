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
      // ...
      state('reveal', style({
        opacity: 1,
       
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('reveal => hide', [
        animate('2s')
      ]),
     
    ]),
  ],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notificationSubscription!:Subscription
  content!:string

  constructor(private notificationService:NotificationService){}

  ngOnInit(){
    this.notificationSubscription = this.notificationService.content$.subscribe((data) => {
      this.content = data
    })
  }

  ngOnDestroy(){
    this.notificationSubscription.unsubscribe()
  }

}
