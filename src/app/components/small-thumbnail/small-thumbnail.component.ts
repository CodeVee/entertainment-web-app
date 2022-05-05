import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideoCategory } from 'src/app/models/video-category.enum';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-small-thumbnail',
  templateUrl: './small-thumbnail.component.html',
  styleUrls: ['./small-thumbnail.component.scss']
})
export class SmallThumbnailComponent implements OnInit {

  isMovie = false;
  @Input() video!: Video;
  @Output() update = new EventEmitter<string>();

  ngOnInit(): void {
    this.isMovie = this.video.category === VideoCategory.Movie;
  }

  updateVideo(bookmarked: boolean): void {
    this.video.isBookmarked = bookmarked;
  }

}
