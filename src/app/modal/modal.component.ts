
import { faXmark, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ModalRepasService } from './../modal-repas.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { CartService } from '../cart.service';


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
  
     // Transition de fermé à ouvert
    transition('* => open', animate('1s ease-in-out', keyframes([
      style({ transform: 'scale(0)', offset: 0 }), // Début de l'ouverture
      style({ transform: 'scale(1)', offset: 1 })  // Fin de l'ouverture
    ]))),

    // Transition de ouvert à fermé
    transition('* => closed', animate('1s ease-in-out', keyframes([
      style({ transform: 'scale(1)', offset: 0 }), // Début de la fermeture
      style({ transform: 'scale(0)', offset: 1 })  // Fin de la fermeture
    ]))),
    ]),
  ]
})
export class ModalComponent implements OnInit {
  faClose = faXmark;
  faCartAdd = faCartArrowDown
  closing:boolean = false

  constructor(public modalRepasService: ModalRepasService,
              private cartService:CartService
              ) {}

  ngOnInit(): void {

  }
  

  get isOpen(): boolean {
    return this.modalRepasService.showModal && !this.closing;
  }
  
  toggle() {
    if (this.modalRepasService.showModal) {
      // Commencer l'animation de fermeture
      this.closing = true;
      console.log('🧤 clicked on toggle - closing', this.modalRepasService.showModal);

      // Attendre la fin de l'animation avant de changer showModal
      setTimeout(() => {
        this.modalRepasService.showModal = false;
        this.closing = false; // Réinitialiser l'état de fermeture
        console.log('🧤 Modal is now closed');
      }, 2000); // Le délai correspond à la durée de l'animation
    } else {
      // Ouvrir le modal immédiatement
      this.modalRepasService.showModal = true;
      console.log('🧤 clicked on toggle - opening', this.modalRepasService.showModal);
    }
  }


  onButtonClick():void{
    this.cartService.addToCart(this.modalRepasService.selectedDish)
  }
}
