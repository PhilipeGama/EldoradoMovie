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

  @Input() showEdit: boolean;

  @Output() newShowEditEvent = new EventEmitter<boolean>();

  toggleDelete(){
    this.newShowEditEvent.emit(false);
  }

  ngOnInit(): void {
    console.log(this.showEdit);
    console.log(this.movie.name);
  }

  delete(){
    const id =  this.route.snapshot.params.id;
    this.movieService.delete(id).subscribe( () => 'Delete sucessful');
    console.log('Delete: ' + id);
  }


}
