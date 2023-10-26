import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from 'src/app/model/movie.interface';
import { GenderService } from 'src/app/services/gender.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  constructor(private genderService: GenderService, private movieService: MovieService) {}

  @Input() movie: Movie;

  @Input() showEdit: boolean;

  @Output() closeModal = new EventEmitter<boolean>();

  public genders;
  public hasErrors;
  public errors = [];
  public hasSuccess;
  public successMessage;

  file;
  filePath;
  fullPath;
  releaseDate = '2022-10-10';

  ngOnInit(): void {
    this.fetchGender();
    this.filePath = this.movie.fullPath;
    console.log(this.movie)
  }

  fetchGender() {
    return this.genderService.getAll().subscribe(genders => {
      this.genders = genders;
    });
  }

  onEdit() {
    let formData: FormData = new FormData();
    formData.append('id', this.movie.id.toString());
    formData.append('name', this.movie.name);
    formData.append('synopsis', this.movie.synopsis);
    formData.append('trailer', this.movie.trailer);
    formData.append('releaseDate', this.movie.releaseDate.toString());
    formData.append('boxOffice', this.movie.boxOffice.toString());
    formData.append('gender', this.movie.gender.id.toString())

    if (this.file) {
      formData.append("poster", this.file, this.file['name']);
    }

    this.movieService.update(formData).subscribe(response => {
      this.hasErrors = false;
      this.hasSuccess = true;
      this.successMessage = 'Filme cadastrado com sucesso!';

    }, error => {
      this.hasSuccess = false;
      this.successMessage = '';

      this.hasErrors = true;
    });
    this.closeModal.emit(false);
  }

  handleFile(e) {
    this.file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.filePath = reader.result as string;
    }

    reader.readAsDataURL(this.file)
  }

  onClose(): void {
    this.closeModal.emit(false);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }

}
