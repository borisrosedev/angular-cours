import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MenuService } from '../menu.service';
import { CarteService } from '../carte.service';

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

  constructor(private menuService:MenuService,
              private carteService:CarteService,
              private userService:UserService
              ){}

        
  ngOnInit(){
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


  ngOnDestroy(){

  }
}
