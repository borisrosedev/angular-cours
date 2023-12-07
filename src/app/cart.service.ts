import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart:Array<any> = []

  constructor() { 
    this.cart = JSON.parse(localStorage.getItem("myCart") || "[]")
  }

  addToCart(element:any){
    // ajoute un nouvel élément au tableau this.cart
    // au niveau de l'attribut
    this.cart.push(element)
    // au niveau de localstorage / cache sous la valeur myCart
    // ça remplace le tableau du localstorage par un nouveau avec l'élément ajouté ci-dessus
    localStorage.setItem('myCart', JSON.stringify(this.cart))
  }

  removeFromCart(id:number){
    // boucle sur le tableau this.cart pour trouver l'id de élément qu'on supprise du panier
    // quand les id correspondent , on fait this.cart 
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].id === id){
        // retire à l'index i un seul élément
        this.cart.splice(i, 1) 
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.cart))
  }

  getCartItemsCount():number{
    return this.cart.length
  }

}
