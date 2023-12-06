import { Component, Input } from '@angular/core';
import { ModalRepasService } from '../modal-repas.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  faClose = faXmark
  @Input() onClose!:() => void

  constructor(public modalRepasService: ModalRepasService){}
}
