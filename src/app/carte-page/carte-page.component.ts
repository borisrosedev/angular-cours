import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DishCarteModel } from '../interfaces/dish-carte-model';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-carte-page',
  templateUrl: './carte-page.component.html',
  styleUrls: ['./carte-page.component.scss']
})
export class CartePageComponent implements OnInit, OnDestroy {
  carteSubscription!:Subscription
  dishes!:Array<DishCarteModel>

  constructor(private carteService:CarteService){}


  // la méthode ne retournant rien vous pouvez mettre le void 
  ngOnInit():void{
    this.carteSubscription = this.carteService.getCarte().subscribe((data)=>{
      this.dishes = data
    })

  }


  ngOnDestroy():void {
    this.carteSubscription.unsubscribe()
  }
}
