import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Video } from '../models/video.model';

@Injectable({ providedIn: 'root' })
export class DataService {

  videos: Video[] = [];
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    if (this.videos.length) {
      return of(this.videos);
    }

    return this.http.get<Video[]>(this.jsonURL)
    .pipe(tap(res => this.videos = res));
  }
}
