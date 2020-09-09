import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  actuals: any;
  populars: any;
  constructor(public ms: MoviesService) {
    this.ms.getActuals().subscribe((res) => {
      this.actuals = res['results'];
    });
    this.ms.getPopulars().subscribe((res) => {
      this.populars = res['results'];
      console.log(this.actuals);
    });
  }

  ngOnInit(): void {}
}
