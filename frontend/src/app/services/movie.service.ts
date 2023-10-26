import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Movie from '../model/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(page: number, limit: number = 3): Observable<Movie> {
    let params = new HttpParams();
    params = params.append('page', page.toString())
    params = params.append('limit', limit.toString())
    return this.http.get<Movie>(`${environment.baseApiUrl}/movies`, { params });
  }

  create(movie: FormData): Observable<Movie> {
    return this.http.post<Movie>(`${environment.baseApiUrl}/movies`, movie);
  }

  update(movie: FormData): Observable<Movie>{
    const id = movie.get('id')
    const url = `${environment.baseApiUrl}/movies/${id}`;
    return this.http.put<Movie>(url, movie);
  }

  delete(id): Observable<Movie>{
    const url = `${environment.baseApiUrl}/movies/${id}`;
    return this.http.delete<Movie>(url);
  }

  errorHandler(e: any): Observable<any> {
    alert(e.message);
    return EMPTY;
  }
}


