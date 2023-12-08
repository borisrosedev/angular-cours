import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  // attribut , propriété
  errorMessage?:string = "404 NotFound"

  constructor(private notificationService:NotificationService){}

  ngOnInit(){
    console.log('✅ not found page component has mounted')
    this.notificationService.sendMessage(this.errorMessage!)
  }

  // hook de destruction du component
  ngOnDestroy(){
    console.log('❎ not found page component has unmounted')
  }

  fromMySon(e:any){
    console.log('papa reçoit : ',e)
  }
}
