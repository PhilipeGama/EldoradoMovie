import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Gender from '../interfaces/gender.interface';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gender> {
    return this.http.get<Gender>(`${environment.baseApiUrl}/genders`);
  }

}
