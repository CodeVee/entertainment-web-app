import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placeholder = 'Search for movies or TV series';
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateSearch(text: string): void {
    this.search = text;
  }

}
