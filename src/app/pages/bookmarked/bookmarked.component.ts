import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent implements OnInit {

  placeholder = 'Search for bookmarked shows';
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateSearch(text: string): void {
    this.search = text;
  }

}
