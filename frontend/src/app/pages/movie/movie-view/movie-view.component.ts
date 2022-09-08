import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  @Input() movie: Movie;

  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleClose(){
    this.closeModal.emit(false)
  }

}
