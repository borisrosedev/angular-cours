import { Component } from '@angular/core';
import { weekDays } from 'src/models/WeekDays';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { DishModel } from '../interfaces/dish-model';
import { ModalRepasService } from '../modal-repas.service';
import { NotificationService } from '../notification.service';
import { trigger, transition, style, state, animate, keyframes } from '@angular/animations'


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],

})
export class MenuPageComponent {
  menuesSubscription!:Subscription
  menues!:Array<DishModel>

  dishOptionsData = [
    {
      value: 'Plat seul'
    },
    {
      value: 'Menu',
    }
  ]


  // attribut de la classe il n'y a pas de mot clé devant (var const let )
  constructor(private menuService: MenuService,
              public modalRepasService: ModalRepasService,
              private notificationService:NotificationService
              ){}
  
  ngOnInit(){
    this.notificationService.sendMessage('Vous êtes sur la page des menus de la semaine')
    this.menuService.getMenues()
    this.menuesSubscription = this.menuService.getMenues().subscribe((data:any) => {
      this.menues = data
      console.log('menues from menu-page', this.menues)
    })

    this.modalRepasService.optionsDish = this.dishOptionsData
    console.log('🍔 this.modalRepasService.optionsDish', this.modalRepasService.optionsDish )
  }

  ngOnDestroy(){
    this.menuesSubscription.unsubscribe()
  }


}
