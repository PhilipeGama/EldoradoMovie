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
    trailer: '',
    releaseDate: '',
    boxOffice: null,
    poster: '',
    gender: null
  };

  public file;
  public genders;

  public hasErrors;
  public hasSuccess;

  public successMessage;
  public errorMessage;

  filePath: string;

  constructor(private genderService: GenderService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.getGender();
  }

  getGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
    });
  }

  onSave() {
    console.log(this.movie)
    this.movieService.create(this.movie).subscribe(movie => {
      this.hasSuccess = true;
      this.successMessage = 'Filme cadastrado com sucesso!';

    
      this.movie = {
        name: '',
        synopsis: '',
        trailer: '',
        releaseDate: '',
        boxOffice: null,
        poster: '',
        gender: null,
      };

    }, error => {
        console.log(error);
        this.hasErrors = true;
        this.errorMessage = error.message;
    });
  }


  handleFile(e) {
    const file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.filePath = reader.result as string;
    }

    reader.readAsDataURL(file)
  }
}

