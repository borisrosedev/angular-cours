import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() data:any
  // tiens toi prêt à recevoir du composant parent
  //nécessairement une props qui aura comme nom data
  // qui peut avoir n'importe quel type
  ngOnInit(){
    console.log('✅ day card has mounted', this.data)
  }
}
