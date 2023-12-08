import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MenuService } from '../menu.service';
import { CarteService } from '../carte.service';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  //userService!:UserService;

  // constructor(userService:UserService){
  //   this.userService = userService
  // }
  menues!:Array<any>
  carte!:Array<any>
  users!:Array<any>
  faChevronMenu = faChevronUp
  faChevronCarte = faChevronUp
  faChevronUser = faChevronUp
  showMenu:boolean = false;
  showCarte:boolean = false;
  showUser:boolean = false;

  constructor(private menuService:MenuService,
              private carteService:CarteService,
              private userService:UserService
              ){}

        
  ngOnInit():void{
    this.menuService.getMenues().subscribe((data)=> {
      // scope de la callback 
        this.menues = data
    })

    this.carteService.getCarte().subscribe((data) => {
        this.carte = data
        
    })

    this.userService.getUsers().subscribe((data) => {
      this.users = data
    })

  }

  // la signature et si elle retourne quelquechose ou pas
  // je veux une méthode style typescript
  onToggle(name:'menu'|'carte'|'user'):void{

    switch(name){
      case 'menu':
          if(!this.showMenu){
            this.showMenu = true
            this.faChevronMenu = faChevronDown
          } else {
            this.showMenu = false
            this.faChevronMenu = faChevronUp
          }
   
        break;
      case 'carte':

        if(!this.showCarte){
          this.showCarte= true
          this.faChevronCarte = faChevronDown
        } else {
          this.showCarte = false
          this.faChevronCarte = faChevronUp
        }
          
        break;
      case 'user':

        if(!this.showUser){
          this.showUser = true
          this.faChevronUser= faChevronDown
        } else {
          this.showUser = false
          this.faChevronUser = faChevronUp
        }
          
        break;
      default:
        break;


    }
    // fonction impure

  }

  ngOnDestroy():void{

  }
}
