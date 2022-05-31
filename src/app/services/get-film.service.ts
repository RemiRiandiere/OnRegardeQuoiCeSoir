import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetFilmService {
  constructor(private http: HttpClient) {}

  private filmURL =
    'https://api.themoviedb.org/3/discover/movie?api_key=459b8720d2105e32a82ca5ace74f4785&language=fr';

  getFilms() {
    return this.http.get(this.filmURL);
  }
}
