import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  //content!:string
  @Input() content?:string


  ngOnInit(){}

  ngOnDestroy(){

  }

}
