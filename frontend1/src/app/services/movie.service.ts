import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { EMPTY, Observable } from 'rxjs';
import Movie from '../models/movie.model';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  // RxJS
  getAll(): Observable<Movie> { // Esse esquema de passar uma classe dentro de < > se chama generics. Pesquisem depois.
    return this.http.get<Movie>(`${environment.baseApiUrl}/movie`)
              // .pipe(
              //   map(obj => obj),
              //   catchError(e => this.errorHandler(e))
              // )
  }

  create(formData: FormData): Observable<Movie> {
    return this.http.post<Movie>(`${environment.baseApiUrl}/movie`, formData)
  }

  delete(id: string): Observable<Movie>{
    const url = `${environment.baseApiUrl}/movie/${id}`;
    return this.http.delete<Movie>(url);
  }


  update(formData: FormData,id: string): Observable<Movie>{
    const url = `${environment.baseApiUrl}/movie/${id}`;
    return this.http.put<Movie>(url, formData);
  }


  errorHandler(e: any): Observable<any> {
    alert(e.message)
    return EMPTY;
  }
}


