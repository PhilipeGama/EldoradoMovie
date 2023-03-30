import {
  animate, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  public movies;
  currentPage: number = 0;

  onCurrentPage(page: number){
    this.currentPage = page;
    this.fetcMovies();
  }

  showEdit = false;
  showView = false;
  showDelete = false;


  selectMovie;

  ngOnInit(): void {
    const id =  this.route.snapshot.params.id;
    this.fetcMovies();
  }

  fetcMovies(){
    this.movieService.getAll(this.currentPage).subscribe((payload: any) => {
      this.movies = payload.data.movies;
    });
  }

  toggleDelete(i: number) {
    if(i == -1) {
      this.selectMovie = null;
    }
    this.selectMovie = this.movies[i];
    this.showDelete = !this.showDelete;
  }

  toggleCloseDelete(showDelete: boolean) {
    this.movieService.getAll(1).subscribe(movies => {
      this.movies = movies;
      this.showDelete = showDelete;
    });
  }

  toggleView(i: number) {
    if(i == -1) {
      this.selectMovie = null;
    }
    this.selectMovie = this.movies[i];
    this.showView = !this.showView;
  }

  toggleCloseView(showView: boolean) { 
      this.showView = showView;
  }


  toggleEdit(i: number) {
    if(i == -1) {
      this.selectMovie = null;
    }
    this.selectMovie = this.movies[i];
    this.showEdit = !this.showEdit;
  }

  toggleCloseEdit(showEdit: boolean) { 
      this.showEdit = showEdit;
  }

}
