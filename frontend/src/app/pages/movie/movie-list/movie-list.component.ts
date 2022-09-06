import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import {
  trigger,
  style,
  animate,
  transition } from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .5 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({ top: -999 }),
          animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]
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
