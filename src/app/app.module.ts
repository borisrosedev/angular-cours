import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { NotificationComponent } from './notification/notification.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartePageComponent } from './carte-page/carte-page.component';
import { DishCardComponent } from './dish-card/dish-card.component';
//HttpClientModule est le module (la classe ) qui vous permettra de consommer
// une api (distante) 

// FormsModule est la bibliothèque qui vous permet d'utiliser [(ngModel)]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    TitleComponent,
    FormComponent,
    InputComponent,
    NotificationComponent,
    MenuPageComponent,
    CardComponent,
    CartePageComponent,
    DishCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
