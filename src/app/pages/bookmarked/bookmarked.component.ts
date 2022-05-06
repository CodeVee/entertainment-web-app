import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VideoCategory } from 'src/app/models/video-category.enum';
import { Video } from 'src/app/models/video.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent implements OnInit {

  placeholder = 'Search for bookmarked shows';
  search = '';
  allMovies: Video[] = [];
  movies: Video[] = [];
  filteredMovies: Video[] = [];
  showFiltered = false;
  constructor(private data: DataService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Bookmarked Shows');
    this.data.getVideos()
    .subscribe(
      videos => {
        this.allMovies = videos.filter(video => video.isBookmarked);
        this.movies = [...this.allMovies];
    })
  }

  updateSearch(text: string): void {
    this.search = text;
    if (!this.search) {
      this.showFiltered = false;
      return;
    }
    this.filteredMovies = this.allMovies.filter(v => v.title.includes(this.search))
    this.showFiltered = true;
  }

}
