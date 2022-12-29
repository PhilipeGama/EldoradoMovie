import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Movie from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  @Input() movie: Movie;

  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private sanitizer: DomSanitizer) { }

  html_trailer;
  ngOnInit(): void {
    this.html_trailer = this.sanitizer.bypassSecurityTrustHtml(this.movie.trailer)
  }

  toggleClose(){
    this.closeModal.emit(false)
  }

}
