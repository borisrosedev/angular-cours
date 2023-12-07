import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() data!:any
  @Input() context!:string
  @Input() title!:string


  constructor(private cartService:CartService){}

  onButtonClick():void{
    this.cartService.addToCart(this.data)
  }
}
