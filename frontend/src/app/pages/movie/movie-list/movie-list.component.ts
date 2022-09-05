import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  public movies;

  showDelete = false;

  showEdit = false;

  ngOnInit(): void {
    const id =  this.route.snapshot.params.id;
    this.index();
  }

  index(){
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    });
  }

  toggleDelete() {
    this.showDelete = !this.showDelete;
  }

  toggleDeleteResponse(newShowDeleteValue: boolean) {
    this.showDelete = newShowDeleteValue;
  }


  toggleEdit() {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit);
  }

  closeEditModal(newShowEditValue: boolean) {
    console.log('closeEditModal', newShowEditValue);
    this.showEdit = newShowEditValue;

  }


  delete(id){
    this.movieService.delete(id).subscribe( () => 'Delete sucessful');
    this.movies = this.movies.filter(item => item.id !== id);
  }



}
