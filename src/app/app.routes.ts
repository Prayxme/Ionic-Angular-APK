import { Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },


  {
    path: 'header', component: HeaderComponent,
  },

  {
    path: 'examen',
    loadComponent: () => import('./examen/examen.page').then( m => m.ExamenPage)
  },
  {
    path: 'login-user',
    loadComponent: () => import('./login-user/login-user.page').then( m => m.LoginUserPage)
  },
  {
    path: 'register-user',
    loadComponent: () => import('./register-user/register-user.page').then( m => m.RegisterUserPage)
  },
];
