import { Component, HostListener } from '@angular/core';
import { FormInputModel } from '../interfaces/form-input-model';
import { BehaviorSubject, Subscription, from, of } from 'rxjs';
import { AuthService } from '../auth.service';

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
      placeholder: 'Email',
      type: 'email' // pour éviter les attaques XSS / injections SQL
    }, 
    {
      name: 'password',
      placeholder: 'Mot de passe',
      type: 'password'
    }

  ]

  formInputsModel = {
    email: '',
    password: ''
  }



  constructor(private authService:AuthService){}


  ngOnInit(){
   
  }


  onFormSubmit = (e:Event) => {
    this.authService.login(this.formInputsModel.email, this.formInputsModel.password)

    
  }


}





