import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from 'src/app/interfaces/movie.interface';
import { GenderService } from 'src/app/services/gender.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {


  constructor(private genderService: GenderService, private movieService: MovieService) {

  }

  @Input() movie: Movie;

  @Input() showEdit: boolean;

  @Output() newShowEdit = new EventEmitter<boolean>();


  public file;
  public genders;
  public hasErrors;
  public errors = [];
  public hasSuccess;
  public successMessage;

  close(){
    console.log('closeEdit');
    this.newShowEdit.emit(false);
  }

  ngOnInit(): void {
    this.getGender();
    this.movie.poster = '';
  }

  getGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
    });
  }

  addMovie() {
    const formData: FormData = new FormData();
    formData.append('name', this.movie.name);
    formData.append('synopsis', this.movie.synopsis);
    formData.append('releaseDate', this.movie.releaseDate);

    formData.append('boxOffice', this.movie.boxOffice.toString());


    //formData.append('gender[id]', this.movie.gender);



    if (this.file) {
      formData.append('poster', this.file, this.file.name);
    }

    this.movieService.update(formData, this.movie.id).subscribe(movie => {
      this.hasSuccess = true;
      this.successMessage = movie.name;

      this.movie = {
        name: '',
        synopsis: '',
        releaseDate: '',
        boxOffice: null,
        poster: '',
       createdAt: null,
        gender: null,


      };

    }, error => {
        console.log(error);
        this.hasErrors = true;

        if (error.status === 409) {
          this.errors.push(error.error);
        }

        for (const err of error.error.message) {
          this.errors.push(err.message);
        }
    });
  }

  handleFile(arquivo) {
    this.file = arquivo[0] || null;
  }



}
