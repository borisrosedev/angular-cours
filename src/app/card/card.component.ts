import { Component, Input } from '@angular/core';
import translateIndexToDay from '../utils/translateIndexToDay';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!:any
  @Input() context!:string
  @Input() index!:number
  translator!:(index:any) => "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | undefined

  constructor(){
    this.translator = translateIndexToDay
  }

  ngOnInit(){
    console.log('✅ card component has mounted', this.data, this.context, this.index)
  }
}
