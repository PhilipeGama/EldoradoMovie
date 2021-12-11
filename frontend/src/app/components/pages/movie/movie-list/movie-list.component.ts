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
      // console.log(movies)
    })
  }

  showDelete: boolean = false;

  toggleDelete () {
    this.showDelete = !this.showDelete;
  }

  showEdit: boolean = false;


  toggleEdit () {
    this.showEdit = !this.showEdit;
  }


  delete(id){
    this.movieService.delete(id).subscribe( () => 'Delete sucessful');
    this.movies = this.movies.filter(item => item.id != id)
  }



}
