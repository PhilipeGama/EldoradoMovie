import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { MovieRegisterComponent} from './pages/movie/movie-register/movie-register.component';
import { CardsComponent } from './pages/movie/cards/cards.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movie/register',
    component: MovieRegisterComponent
  },
  {
    path: 'movie/list',
    component: MovieListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
