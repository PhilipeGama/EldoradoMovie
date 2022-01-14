import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from 'src/app/models/movie.model';
import { GenderService } from 'src/app/services/gender.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  @Input() movie: Movie;

  @Input() showEdit: boolean;

  @Output() newShowEdit = new EventEmitter<boolean>()

  close(){
    console.log("closeEdit")
    this.newShowEdit.emit(false);
  }


  public file;
  public genders;
  public hasErrors;
  public errors = []
  public hasSuccess;
  public successMessage;


  constructor(private genderService: GenderService, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getGender();
    this.movie.poster="";
  }

  getGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
    })
  }

  addMovie() {
    let formData: FormData = new FormData();
    formData.append('name', this.movie.name);
    formData.append('synopsis', this.movie.synopsis);
    formData.append('release_date', this.movie.release_date);
    
    formData.append('box_office', this.movie.box_office.toString());
   
  
    formData.append('gender[id]', this.movie.gender);



    if (this.file) {
      formData.append("poster", this.file, this.file['name']);
    }

    this.movieService.update(formData, this.movie.id).subscribe(movie => {
      this.hasSuccess = true;
      this.successMessage = movie.name;

      this.movie = {
        name: "",
        synopsis: "",
        release_date: "",
        box_office: null,
        poster: "",
        created_at: null,
        gender: null,


      }

    }, error => {
        console.log(error)
        this.hasErrors = true;

        if (error.status === 409) {
          this.errors.push(error.error)
        }
  
        for(let err of error.error.message) {
          this.errors.push(err.message);
        }
    })
  }

  handleFile(arquivo) {
    this.file = arquivo[0] || null;
  }

  

}
