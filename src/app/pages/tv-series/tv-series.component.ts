import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VideoCategory } from 'src/app/models/video-category.enum';
import { Video } from 'src/app/models/video.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {

  placeholder = 'Search for TV series';
  search = '';
  allTvSeries: Video[] = [];
  tvSeries: Video[] = [];
  filteredTvSeries: Video[] = [];
  showFiltered = false;
  constructor(private data: DataService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Tv Series');
    this.data.getVideos()
    .subscribe(
      videos => {
        this.allTvSeries = videos.filter(video => video.category === VideoCategory.TVSeries);
        this.tvSeries = [...this.allTvSeries];
    })
  }

  updateSearch(text: string): void {
    this.search = text;
    if (!this.search) {
      this.showFiltered = false;
      return;
    }
    this.filteredTvSeries = this.allTvSeries.filter(v => v.title.includes(this.search))
    this.showFiltered = true;
  }


}
