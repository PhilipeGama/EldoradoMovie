import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { CardsComponent } from './pages/movie/cards/cards.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieRegisterComponent } from './pages/movie/movie-register/movie-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CardsComponent
      },
      {
        path: 'register-movie',
        component: MovieRegisterComponent
      },
      {
        path: 'movies',
        component: MovieListComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
