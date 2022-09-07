import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public movies;

  constructor(private movieService: MovieService,private auth: AuthService) { }


  ngOnInit(): void {
    this.fecthMovies();
  }

  fecthMovies(){
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
    });
  }

}
