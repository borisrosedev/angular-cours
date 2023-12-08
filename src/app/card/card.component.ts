import { Component, HostListener, Input } from '@angular/core';
import translateIndexToDay from '../utils/translateIndexToDay';
import { ModalRepasService } from '../modal-repas.service';

//décorateur qui agit sur une classe
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // propriétés
  // décorateurs qui agissent sur des propriétés
  @Input({ required: true}) data!:any
  @Input({ required: true}) context!:string
  @Input() index?:number
  @Input() actionButton?:string
  @Input() onClickButton?:(obj:any, specifics:any) => void
  // attribut
  translator!:(index:any) => "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | undefined

  constructor(public modalRepasService:ModalRepasService){
    this.translator = translateIndexToDay
  }

  // méthode 
  // Lifecycle Hook
  ngOnInit(){
    console.log('✅ card component has mounted', this.data, this.context, this.index)
  }

  //Lifecycle Hook
  ngOnDestroy(){
    console.log('❎ card component has been unmounted')
  }

  openModal(dish:any){
    this.modalRepasService.selectedDish = dish;
    console.log('🍔',this.modalRepasService.selectedDish)
    this.modalRepasService.showModal = true
  }


}
