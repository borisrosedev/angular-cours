import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconDefinition, faChessRook } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  title:string = 'Cantinière'
  faLogo:IconDefinition = faChessRook
  // isConnected:boolean = false;


  constructor(private notificationService: NotificationService){}
  //lifecyle hook
  ngOnInit(){
    console.log('✅ landing-page has mounted')
    this.notificationService.sendMessage('Bienvenue')

    // setTimeout(() => {
    //   this.isConnected = true
    // }, 5000)
  }
  
  //lifecycle hook
  ngOnDestroy(){
    console.log('❎ landing-page has unmounted')
  }


  



}
