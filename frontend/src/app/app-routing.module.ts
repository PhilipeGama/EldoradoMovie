import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { CardsComponent } from './pages/movie/cards/cards.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieRegisterComponent } from './pages/movie/movie-register/movie-register.component';
import { AuthGuard } from './services/auth.guard';
import { MovieViewComponent } from './pages/movie/movie-view/movie-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CardsComponent
      },
    ]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CardsComponent
      },
      {
        path: 'view-movie',
        component: MovieViewComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
