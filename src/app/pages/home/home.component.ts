import { Component, OnInit } from '@angular/core';
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
  trendingVideos: Video[] = [];
  recommendedVideos: Video[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getVideos()
    .subscribe(
      videos => {
        this.trendingVideos = videos.filter(video => video.isTrending);
        this.recommendedVideos = videos.filter(video => !video.isTrending);
    })
  }

  updateSearch(text: string): void {
    this.search = text;
  }

}
