import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/interfaces/movie.interface';
import { GenderService } from 'src/app/services/gender.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-register',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.scss']
})
export class MovieRegisterComponent implements OnInit {

  public movie: Movie = {


    name: '',
    synopsis: '',
    releaseDate: '',
    boxOffice: null,
    poster: '',
   createdAt: null,
    gender: null
  };

  public file;
  public genders;
  public hasErrors;
  public errors = [];
  public hasSuccess;
  public successMessage;


  constructor(private genderService: GenderService, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getGender();
  }

  getGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
      console.log(this.genders);
    });
  }

  addMovie() {
    const formData: FormData = new FormData();
    formData.append('name', this.movie.name);
    formData.append('synopsis', this.movie.synopsis);
    formData.append('releaseDate', this.movie.releaseDate);

    formData.append('boxOffice', this.movie.boxOffice.toString());


    formData.append('gender[id]', this.movie.gender);



    if (this.file) {
      formData.append('poster', this.file, this.file.name);
    }

    this.movieService.create(formData).subscribe(movie => {
      this.hasSuccess = true;
      this.successMessage = 'Filme cadastrado com sucesso!';

      console.log(this.hasSuccess + '-' + this.successMessage);
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

