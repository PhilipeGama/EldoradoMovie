import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/model/movie.interface';
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
  filePath;

  public hasErrors;
  public hasSuccess;

  public successMessage;
  public errorMessage;

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
    let formData: FormData = new FormData();
    formData.append('name', this.movie.name);
    formData.append('synopsis', this.movie.synopsis);
    formData.append('trailer', this.movie.trailer);
    formData.append('releaseDate', this.movie.releaseDate);
    formData.append('boxOffice', this.movie.boxOffice.toString());
    formData.append('gender', this.movie.gender.toString())

    if (this.file) {
      formData.append("poster", this.file, this.file['name']);
    }

    this.movieService.create(formData).subscribe(response => {

      this.clearForm();

      this.hasErrors = false;
      this.errorMessage = '';

      this.hasSuccess = true;
      this.successMessage = 'Filme cadastrado com sucesso!';

    }, error => {
      this.hasSuccess = false;
      this.successMessage = '';

      this.hasErrors = true;
      this.errorMessage = error.message;
    });
  }


  handleFile(e) {
    this.file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.filePath = reader.result as string;
    }

    reader.readAsDataURL(this.file)
  }

  onClearForm(){
    this.movie = {
      name: '',
      synopsis: '',
      trailer: '',
      releaseDate: '',
      boxOffice: null,
      poster: '',
      gender: null,
    };

    this.hasSuccess = false;
    this.successMessage = null;

    this.hasErrors = false;
    this.errorMessage = null;

    this.filePath = null;
  }

  clearForm(){
    this.movie = {
      name: '',
      synopsis: '',
      trailer: '',
      releaseDate: '',
      boxOffice: null,
      poster: '',
      gender: null,
    };
    this.filePath = null;
  }

  
}

