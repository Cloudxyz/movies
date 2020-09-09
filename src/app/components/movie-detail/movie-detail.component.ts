import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  getMovie: any;
  movie = new MovieModel();
  constructor(
    private location: Location,
    public router: ActivatedRoute,
    public ms: MoviesService
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    this.ms.getMovie(id).subscribe((res) => {
      this.getMovie = res;
      this.movie.posterPath = this.getMovie.poster_path;
      this.movie.originalTitle = this.getMovie.original_title;
      this.movie.releaseDate = this.getMovie.release_date;
      this.movie.overview = this.getMovie.overview;
      this.movie.tagline = this.getMovie.tagline;
      this.movie.genres = this.getMovie.genres;
    });
  }

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
