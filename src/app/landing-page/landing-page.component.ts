import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconDefinition, faChessRook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  title:string = 'Cantinière'
  faLogo:IconDefinition = faChessRook
  // isConnected:boolean = false;


  //lifecyle hook
  ngOnInit(){
    console.log('✅ landing-page has mounted')

    // setTimeout(() => {
    //   this.isConnected = true
    // }, 5000)
  }
  
  //lifecycle hook
  ngOnDestroy(){
    console.log('❎ landing-page has unmounted')
  }


  



}
