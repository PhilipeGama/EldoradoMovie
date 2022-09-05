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
  // TODO 
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


  constructor(private genderService: GenderService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.getGender();
  }

  getGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
    });
  }

  addMovie() {
    const formData: FormData = new FormData();


    if (this.file) {
      formData.append('poster', this.file, this.file.name);
    }

    this.movieService.create(this.movie).subscribe(movie => {
      this.hasSuccess = true;
      this.successMessage = 'Filme cadastrado com sucesso!';

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
    });
  }

  handleFile(arquivo) {
    this.file = arquivo[0] || null;
  }
}

