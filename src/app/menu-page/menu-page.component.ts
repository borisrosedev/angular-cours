import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { DishModel } from '../interfaces/dish-model';
import { ModalRepasService } from '../modal-repas.service';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {
  menuesSubscription!:Subscription
  menues!:Array<DishModel>
  specificDish!:DishModel | {}

  // attribut de la classe il n'y a pas de mot clé devant (var const let )
  constructor(private menuService: MenuService,
              private notificationService: NotificationService,
              public modalRepasService: ModalRepasService
            ){}
  
  ngOnInit(){
    this.menuService.getMenues()
    this.menuesSubscription = this.menuService.getMenues().subscribe((data:any) => {
      this.menues = data
      console.log('menues from menu-page', this.menues)
    })
  }

  ngOnDestroy(){
    this.menuesSubscription.unsubscribe()
  }

  showSpecificDish(dish:DishModel){
    this.modalRepasService.showModal = true
    this.specificDish = dish
    this.notificationService.sendMessage('Bonne sélection')
  }

  onCloseModal(){
    this.modalRepasService.showModal = false
    this.specificDish = {}
  }




}
