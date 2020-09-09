import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '73f8bad4e6352906f86c9b7a8e3ed9e0';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getSearch(movie: string) {
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&query=${movie}&language=en-US`;

    return this.http.get(url).pipe(map((res) => res));
  }

  getMovie(movieID: string) {
    let url = `${this.urlMoviedb}/movie/${movieID}?api_key=${this.apiKey}&language=en-US`;

    return this.http.get(url).pipe(map((res) => res));
  }

  getActuals() {
    let url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.http.get(url).pipe(map((res) => res));
  }

  getPopulars() {
    let url = `${this.urlMoviedb}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.http.get(url).pipe(map((res) => res));
  }
}
