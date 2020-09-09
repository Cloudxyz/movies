import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: any;
  s: string;
  constructor(public router: ActivatedRoute, public ms: MoviesService) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.s = params['s'];
      this.ms.getSearch(this.s).subscribe((res) => {
        this.movies = res['results'];
      });
    });
  }
}
