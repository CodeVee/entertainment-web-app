import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  placeholder = 'Search for movies';
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateSearch(text: string): void {
    this.search = text;
  }

}
