
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
      state('open', style({
        opacity: 1,
        transform: 'scale(0)',
      })),
      transition('* <=> *', animate('4s ease-in-out', keyframes([
        style({
            opacity: 0.5,
            offset: 1,
        }),
        style({
            transform: 'scale(0.5)',
            offset:1
        }),
      ]))),
      state('closed', style({
        opacity: 0,
        transform: 'scale(1)',
      })),

    ]),
  ],
})
export class ModalComponent implements OnInit {
  faClose = faXmark;

  constructor(private changeDetectorRef: ChangeDetectorRef, 
              public modalRepasService: ModalRepasService) { }

  // ngOnInit(): void {
  //   // Synchroniser isOpen avec showModal du service
  //   this.isOpen = this.modalRepasService.showModal;
  // }

  ngOnInit(): void {

    // à cause du ngIf 
    // setTimeout(() => {
    //   this.isOpen = true;
    //   this.changeDetectorRef.detectChanges();
    // }, 1000);
  }
  

  get isOpen(): boolean {
    return this.modalRepasService.showModal;
  }

  // set isOpen(value: boolean) {
  //   this.modalRepasService.showModal = value;
  
  // }
  // set isOpen(value: boolean) {
  //   this.modalRepasService.showModal = value;
  //   //this.changeDetectorRef.detectChanges();
  // }
  

  toggle() {
 
    this.modalRepasService.showModal = !this.modalRepasService.showModal;
    console.log('🧤 clicked on toggle', this.modalRepasService.showModal)
    //this.changeDetectorRef.detectChanges();

}
}
