import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }


  ngOnInit(): void {
    const id =  this.route.snapshot.params.id;
    

    this.index();
  }

  index(){
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    })
  }

  delete(id : string){
    console.log(id);
  }



}
