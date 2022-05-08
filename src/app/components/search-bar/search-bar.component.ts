import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  searchCtrl = new FormControl();
  @Input() placeholder = 'placeholder';
  @Output() textChanged = new EventEmitter<string>();
  protected notifier = new Subject();

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  ngOnInit(): void {
    this.searchCtrl.valueChanges.pipe(takeUntil(this.notifier))
    .subscribe(text => this.textChanged.emit(text));
  }

}
