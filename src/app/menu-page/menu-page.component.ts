import { Component } from '@angular/core';
import { weekDays } from 'src/models/WeekDays';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {
  // attribut de la classe il n'y a pas de mot clé devant (var const let )
  constructor(private menuService: MenuService){}

  ngOnInit(){
    this.menuService.getMenues()
  }


}
