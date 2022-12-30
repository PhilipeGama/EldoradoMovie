import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pageNumber = [1,2,3];

  meta = {
    totPage: 10,
    currentPage: 1,
    nextPage: 10,
    itemsPerPage: 10,
    totItems: 50,
    lastPage: 5,
  }

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    console.log(this.pageNumber[2])
    if(this.meta.totPage > this.pageNumber[2]) {
      const newArray =  this.pageNumber.map((v) => v + 1);
      this.pageNumber = newArray;
    }

  }

  previousPage(){
    if(this.pageNumber[0] > 1){
      const newArray =  this.pageNumber.map((v) => v - 1);
      this.pageNumber = newArray;
    }

  }

  currentPage(page: number){
    this.meta.currentPage = page;
    console.log(page)
  }


}
