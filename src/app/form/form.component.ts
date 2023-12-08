import { Component, Input } from '@angular/core';
import { FormInputModel } from '../interfaces/form-input-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  //! traduction tu ne peux pas "monter" sans que cette props ait été définie
  @Input({ required: true}) formData!:Array<FormInputModel>
  @Input() onFormSubmit!:(e:Event) => void
  @Input() context!:string
  @Input() actionButton!:string
  @Input() formInputsModel!:any




  //hook qui vous permet de savoir si les props sont connus par le component
  // lorsqu'il monte / il est créé
  ngOnInit(){
    console.log('✅ form component has mounted', this.formData)
  }

}
