import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {

  @Input() title!:string
  @Input() hNumber!:number
  @Output() messageApapa = new EventEmitter<string>()


  ngOnInit(){
    console.log('✅ Title component has mounted', this.title)
    this.messageApapa.emit('Salut Papa')
  }

  ngOnDestroy(){

  }


}
