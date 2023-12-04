import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  errorMessage?:string = "404 NotFound"

  // hook d'initialisation du component
  ngOnInit(){
    console.log('✅ not found page component has mounted')
  }

  // hook de destruction du component
  ngOnDestroy(){
    console.log('❎ not found page component has unmounted')
  }

}
