import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public movies;
  

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
    this.index();
  }

  index(){
    this.movieService.getAll().subscribe(movies => {
      console.log(movies);
     

      this.movies = movies;
     
    })
  }

}
