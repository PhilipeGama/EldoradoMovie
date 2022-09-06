
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

import { CardsComponent } from './pages/movie/cards/cards.component';
import { MovieDeleteComponent } from './pages/movie/movie-delete/movie-delete.component';
import { MovieEditComponent } from './pages/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { MovieRegisterComponent } from './pages/movie/movie-register/movie-register.component';
import { MovieViewComponent } from './pages/movie/movie-view/movie-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MovieEditComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
