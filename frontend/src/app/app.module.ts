
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { CardsComponent } from './components/movie/cards/cards.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { MovieEditComponent } from './components/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieRegisterComponent } from './components/movie/movie-register/movie-register.component';
import { MovieViewComponent } from './components/movie/movie-view/movie-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MovieListComponent,
    MovieRegisterComponent,
    CardsComponent,
    MovieDeleteComponent,
    MovieViewComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
