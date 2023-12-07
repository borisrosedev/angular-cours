
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalRepasService } from './../modal-repas.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('openClose', [
      // État "ouvert"
      state('open', style({
        transform: 'scale(1)'
      })),
  
      // État "fermé"
      state('closed', style({
        transform: 'scale(0)'
      })),
  
      // Transition de fermé à ouvert et vice versa
      transition('* <=> *', animate('2s ease-in-out', keyframes([
        style({ transform: 'scale(0)', offset: 0 }),   // Début de l'animation
        style({ transform: 'scale(1)', offset: 1 })    // Fin de l'animation
      ]))),
    ]),
  ]

  //   // Transition de fermé à ouvert
  //   transition('closed => open', animate('2s ease-in-out', keyframes([
  //     style({ transform: 'scale(0)', offset: 0 }), // Début de l'ouverture
  //     style({ transform: 'scale(1)', offset: 1 })  // Fin de l'ouverture
  //   ]))),

  //   // Transition de ouvert à fermé
  //   transition('open => closed', animate('2s ease-in-out', keyframes([
  //     style({ transform: 'scale(1)', offset: 0 }), // Début de la fermeture
  //     style({ transform: 'scale(0)', offset: 1 })  // Fin de la fermeture
  //   ]))),
  
})
export class ModalComponent implements OnInit {
  faClose = faXmark;

  constructor(private changeDetectorRef: ChangeDetectorRef, 
              public modalRepasService: ModalRepasService) { }

  ngOnInit(): void {

  }
  

  get isOpen(): boolean {
    return this.modalRepasService.showModal;
  }
  

  toggle() {
 
    this.modalRepasService.showModal = !this.modalRepasService.showModal;
    console.log('🧤 clicked on toggle', this.modalRepasService.showModal)
    //this.changeDetectorRef.detectChanges();

}
}
