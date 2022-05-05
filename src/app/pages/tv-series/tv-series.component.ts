import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {

  placeholder = 'Search for TV series';
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateSearch(text: string): void {
    this.search = text;
  }

}
