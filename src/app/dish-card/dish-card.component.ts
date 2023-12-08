import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { IconDefinition, faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() data!:any;
  @Input() context!:string;
  @Input() title!:string;
  @Input() isHeartChecked!:boolean;
  heartUnchecked:IconDefinition = faHeart
  heartChecked:IconDefinition = faHeartCircleCheck

  emptyHeartStyle = {
    color: 'black'
  }
  
  fullHeartStyle = {
    color: 'red'
  }

  constructor(private cartService:CartService){}

  onButtonClick():void{
    this.cartService.addToCart(this.data)
  }

  onIconClick():void{
    this.isHeartChecked = !this.isHeartChecked
  }



}
