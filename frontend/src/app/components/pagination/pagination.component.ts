import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  pages = [];
  @Input() totPages: number;
  @Output() currentPageOutput = new EventEmitter<number>()
  currentPage: number = 1;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadPaginationIndex();
  }

  ngOnInit(): void { }

  loadPaginationIndex(){
    if(this.totPages === 1){
      this.pages = [1]
    }
    if(this.totPages === 2){
      this.pages = [1, 2]
    }
    if(this.totPages >= 3){
      this.pages = [1, 2, 3]
    }
  }

  nextPage(){
    
    if(this.currentPage < this.totPages - 1){
      this.currentPage++;
      this.currentPageOutput.emit(this.currentPage)
    }

    if(this.pages[this.pages.length - 1] >= this.totPages) {
      return;
    }

    if(this.totPages > this.pages[2]) {
      const newArray =  this.pages.map((v) => v + 1);
      this.pages = newArray;
    }
  }

  previousPage(){
    if(this.currentPage > 0){
      this.currentPage--;
      this.currentPageOutput.emit(this.currentPage)
    }
    if(this.pages[0] <= 1){
      return;
    }

    if(this.pages[0] > 1){
      const newArray =  this.pages.map((v) => v - 1);
      this.pages = newArray;
    }
  }

  onCurrentPage(page: number){
    this.currentPage = page - 1;
    this.currentPageOutput.emit(this.currentPage)
  }

  onHighlighterNumber(number){
    if(number === this.currentPage){
      return 'highlighter-number';
    }
  }

}
