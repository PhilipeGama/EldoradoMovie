import {
  animate, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .5 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({ top: -999 }),
          animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]
})
export class MovieListComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  movies;
  index;
  currentPage: number = 0;
  totItems: number;
  totPages: number;
  showEdit = false;
  showView = false;
  showDelete = false;
  selectedMovie;

  onCurrentPage(page: number){
    this.currentPage = page;
    this.fetcMovies();
  }

  ngOnInit(): void {
    this.fetcMovies();
  }

  fetcMovies(){
    this.movieService.getAll(this.currentPage, 10).subscribe((payload: any) => {
      this.movies = payload.data.items;
      console.log(this.movies)
      this.totItems = payload.data.totItems;
      this.totPages = payload.data.totPages;
    });
  }

  toggleEdit(i: number) {
    if(i == -1) {
      this.selectedMovie = null;
    }
    this.selectedMovie = this.movies[i];
    this.showEdit = !this.showEdit;
  }

  toggleCloseEdit(showEdit: boolean) { 
        this.showEdit = showEdit;
  }


  toggleView(i: number) {
    if(i == -1) {
      this.selectedMovie = null;
    }
    this.selectedMovie = this.movies[i];
    this.showView = !this.showView;
  }

  toggleCloseView(showView: boolean) { 
      this.showView = showView;
  }


  toggleDelete(index: number) {
    if(index == -1) {
      this.selectedMovie = null;
      return;
    }
    this.index = index;
    this.selectedMovie = this.movies[index];
    this.showDelete = !this.showDelete;
  }

  toggleCloseDelete(btnType: string) {
    if(btnType === "cancel") {
      this.showDelete = false
    }

    if(btnType == "confirm") {
      //this.movieService.delete(this.selectedMovie.id).subscribe(() => this.showDelete = false);
      this.movies = this.movies.slice(this.index, 1)
      this.showDelete = false;
    }
  }

}
