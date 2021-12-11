import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.scss']
})
export class MovieDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private  movieService: MovieService) { }

  ngOnInit(): void {
  }

  delete(){
    const id =  this.route.snapshot.params.id;
    this.movieService.delete(id).subscribe( () => 'Delete sucessful');
    console.log("Delete: "+id);
  }
}
