import { Component } from '@angular/core';
import { IconDefinition, faRightToBracket, faChessRook, faBookOpen, faClipboardList, faBagShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faLogin = faRightToBracket
  faLogout = faRightFromBracket
  faLogo = faChessRook
  faMenu = faBookOpen
  faCarte = faClipboardList
  faCart = faBagShopping
  isConnected!:boolean

  constructor(private router: Router, private authService: AuthService,private cartService:CartService){}

  ngOnInit(){
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
    }
    this.router.navigate(['login-page'])

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
