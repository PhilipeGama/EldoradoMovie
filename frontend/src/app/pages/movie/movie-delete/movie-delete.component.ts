import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.scss']
})
export class MovieDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private  movieService: MovieService) { }

  @Input() movie: Movie;

  @Output() closeModal = new EventEmitter<boolean>();

  toggleDelete(){
    this.closeModal.emit(false);
  }

  ngOnInit(): void {
    console.log(this.movie)
  }

  onDelete(){
    this.movieService.delete(this.movie.id).subscribe( () => this.closeModal.emit(false));
  }


}
