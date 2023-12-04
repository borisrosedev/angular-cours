import { Component } from '@angular/core';
import { FormInputModel } from '../interfaces/form-input-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  // formData:FormInputModel[] = []
  formData:Array<FormInputModel> = [

    {
      name: 'email',
      placeholder: 'ex:adam@gmail.com',
      type: 'email' // pour éviter les attaques XSS / injections SQL
    }, 
    {
      name: 'password',
      placeholder: '******',
      type: 'password'
    }

  ]

  onFormSubmit = () => {
    console.log('🧤 clicked on onFormSubmit')
  }


}





