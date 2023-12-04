import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title!:string
  @Input() hNumber!:number

  ngOnInit(){
    console.log('✅ Title component has mounted', this.title)
  }
}
