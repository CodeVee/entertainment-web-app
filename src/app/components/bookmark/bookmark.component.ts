import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {

  @Input() bookmarked = false;
  @Output() changed = new EventEmitter<boolean>();

  updateBookmark(): void {
    this.changed.emit(!this.bookmarked);
  }
}
