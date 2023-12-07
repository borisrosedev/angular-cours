import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart!:any

  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cart = this.cartService.cart
  }

  removeItemFromCart(id:number){
    this.cartService.removeFromCart(id)
  }

}
