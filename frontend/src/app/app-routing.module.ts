import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieRegisterComponent} from './components/movie/movie-register/movie-register.component';
import { CardsComponent } from './components/movie/cards/cards.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path: 'movie/register',
    component: MovieRegisterComponent
  },
  {
    path: 'movie/list',
    component: MovieListComponent
  },
  {
    path: 'movie/cards',
    component: CardsComponent
  },
  {
    path: 'movie/delete/:id',
    component: MovieDeleteComponent
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
