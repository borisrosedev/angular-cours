import { Component } from '@angular/core';
import { IconDefinition, faRightToBracket, faChessRook, faBookOpen, faClipboardList, faBagShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('openClose', [
      state('open', style({
        transform:'translateY(-50px)'
      })),
      state('close', style({
        transform: 'translateY(0)'
      })),
      transition('open => close', animate('0.5s ease-in-out'))
    ])

  ]
})
export class HeaderComponent {
  faLogin = faRightToBracket
  faLogout = faRightFromBracket
  faLogo = faChessRook
  faMenu = faBookOpen
  faCarte = faClipboardList
  faCart = faBagShopping
  isConnected!:boolean
  showAnimation:boolean = false

  constructor(private router: Router, private authService: AuthService,private cartService:CartService){}

  ngOnInit(){
    this.showAnimation = true
    // une fonction native de Javascript de type asychrone
    setTimeout(() => {
      // corps de la callback
      this.showAnimation = false
    },2000)
    // je veux que mon animation se déclenche


    this.authService.user$.subscribe((data) => {
      if(data.id){
        this.isConnected = true
      } else {
        this.isConnected = false
      }
    })
  }

 

  // arrow function
  onLoginClick = () => {
    console.log('🧤 clicked on loginIcon')
    if(this.isConnected){
        this.authService.logout()
        this.router.navigate(['landing-page'])
    } else {
      this.router.navigate(['login-page'])
    }


  }

  onLandingClick = () => {
    this.router.navigate(['']);
  }

  onCartClick = () => {
    this.router.navigate(['cart-page'])
  }

  nbElementsinCart():number{
    return this.cartService.getCartItemsCount()
  }

}
