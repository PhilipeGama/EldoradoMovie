import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pages = [1, 2, 3];
  @Input() totPages: number;
  @Output() currentPage = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    //this.loadPaginationIndex()
  }

  loadPaginationIndex(){
    console.log(this.totPages);
    for(let i =1; i < this.totPages; i++){
      
      if(i >= 3){
        return;
      }
      this.pages.push(i)
    }
 
  }

  nextPage(){
    console.log(this.pages)
    if(this.pages[2] >= this.totPages) {
      return;
    }
    
    this.currentPage.emit(this.pages[2] - 1)


    if(this.totPages > this.pages[2]) {
      const newArray =  this.pages.map((v) => v + 1);
      this.pages = newArray;
    }

  }

  previousPage(){
    if(this.pages[0] <= 1){
      return;
    }
    this.currentPage.emit(this.pages[0] - 1)

    if(this.pages[0] > 1){
      const newArray =  this.pages.map((v) => v - 1);
      this.pages = newArray;
    }
  }

  onCurrentPage(page: number){
    this.currentPage.emit(page - 1)
  }


}
