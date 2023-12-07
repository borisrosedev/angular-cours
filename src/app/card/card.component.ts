import { Component, Input } from '@angular/core';
import translateIndexToDay from '../utils/translateIndexToDay';
import { ModalRepasService } from '../modal-repas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({ required: true}) data!:any
  @Input({ required: true}) context!:string
  @Input() index?:number
  @Input() actionButton?:string
  @Input() onClickButton?:(obj:any, specifics:any) => void
  translator!:(index:any) => "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | undefined

  constructor(public modalRepasService:ModalRepasService){
    this.translator = translateIndexToDay
  }

  ngOnInit(){
    console.log('✅ card component has mounted', this.data, this.context, this.index)
  }
}
