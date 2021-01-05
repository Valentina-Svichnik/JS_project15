import { Component, EventEmitter, OnInit, Output, NgModule } from '@angular/core';

@Component({
  selector: 'app-search-workers',
  templateUrl: './search-workers.component.html',
  styleUrls: ['./search-workers.component.css']
})
export class SearchWorkersComponent implements OnInit {
  searchStr = '';
  @Output() searchWorker = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchWorker() {
    this.searchWorker.emit(this.searchStr);
  }

}
