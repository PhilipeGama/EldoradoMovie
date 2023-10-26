import { Component, EventEmitter, Input, Output } from '@angular/core';
import Movie from 'src/app/model/movie.interface';


@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.scss']
})
export class MovieDeleteComponent {

  constructor(){}

  @Input() movie: Movie;
  @Output() btnClicked = new EventEmitter<string>();

  onConfirm(){
    this.btnClicked.emit('confirm')
  }

  onCancel(){
    this.btnClicked.emit('cancel');
  }
}
