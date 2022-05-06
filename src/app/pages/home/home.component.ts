import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Video } from 'src/app/models/video.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  placeholder = 'Search for movies or TV series';
  search = '';
  allVideos: Video[] = [];
  trendingVideos: Video[] = [];
  recommendedVideos: Video[] = [];
  filteredVideos: Video[] = [];
  showFiltered = false;
  constructor(private data: DataService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Home');
    this.data.getVideos()
    .subscribe(
      videos => {
        this.allVideos = videos;
        this.trendingVideos = videos.filter(video => video.isTrending);
        this.recommendedVideos = videos.filter(video => !video.isTrending);
    })
  }

  updateSearch(text: string): void {
    this.search = text;
    if (!this.search) {
      this.showFiltered = false;
      return;
    }
    this.filteredVideos = this.allVideos.filter(v => v.title.includes(this.search))
    this.showFiltered = true;
  }

}
