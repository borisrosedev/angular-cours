import { Component, Input } from '@angular/core';
import translateIndexToDay from '../utils/translateIndexToDay';
import { ModalRepasService } from '../modal-repas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!:any
  @Input() context!:string
  @Input() index!:number
  @Input() actionButton!:string
  @Input() onClickButton!:(obj:any) => void
  @Input() specifics?:any
  translator!:(index:any) => "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | undefined

  constructor(public modalRepasService:ModalRepasService){
    this.translator = translateIndexToDay
  }

  ngOnInit(){
    console.log('✅ card component has mounted', this.data, this.context, this.index)
  }

  
}
