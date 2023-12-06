import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() data!:any
  @Input() context!:string
  @Input() title!:string
  chosenColor= 'lightGreen'
}
