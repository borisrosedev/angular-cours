import { Component, OnDestroy, OnInit } from '@angular/core';
import {  style, trigger, animate, state, transition, keyframes } from '@angular/animations'

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  animations:[
      trigger('errorEmitter', [
        
          state('true', style({
            opacity: 0,
          })),
          transition('true => *', [
            animate('2000ms ease-out', keyframes([
              style({
                opacity: 0.2,
                offset: 0.2
              }),
              style({
                opacity: 0.4,
                offset: 0.4
              }),
              style({
                opacity: 0.6,
                offset: 0.6
              }),
              style({
                opacity: 0.8,
                offset: 0.8
              }),

            ]))
          ]),
          state('false', style({
            opacity: 1
          }))
      
    
  
      ])
  ]
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  errorMessage = "404 NotFound"
  showMessage:boolean = true

  // hook d'initialisation du component
  ngOnInit(){
    console.log('✅ not found page component has mounted')
    setTimeout(() => {
      this.showMessage = false
    }, 2000)
  
  }

  // hook de destruction du component
  ngOnDestroy(){
    console.log('❎ not found page component has unmounted')
    
  }

}
