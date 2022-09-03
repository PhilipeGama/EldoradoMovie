import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/interfaces/movie.model';
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
    })
  }

  showDelete: boolean = false;

  toggleDelete () {
    this.showDelete = !this.showDelete;
  }

  toggleDeleteResponse (newShowDeleteValue: boolean) {  
    this.showDelete = newShowDeleteValue;
  }

  showEdit: boolean = false;


  toggleEdit () {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit);
  }

  closeEditModal (newShowEditValue: boolean) {
    console.log("closeEditModal",newShowEditValue);
    this.showEdit = newShowEditValue;

  }


  delete(id){
    this.movieService.delete(id).subscribe( () => 'Delete sucessful');
    this.movies = this.movies.filter(item => item.id != id)
  }



}
