import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { CartePageComponent } from './carte-page/carte-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';



const routes: Routes = [ 

  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path:'menu-page',
    component: MenuPageComponent
  },
  {
    path:'carte-page',
    component: CartePageComponent
  },
  {
    path: 'cart-page',
    component: CartPageComponent
  },
  {
    path: 'admin-page',
    component:AdminPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
