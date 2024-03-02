import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-search',
  templateUrl: './batch-search.component.html',
  styleUrls: ['./batch-search.component.css'],
})
export class BatchSearchComponent implements OnInit {
  userInputValue: any;
  filterValue: any;
  isSearchingImg: boolean = false
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createBatchSearch() {
    let dataToArray;
    if (this.filterValue == 'withComma') {
      dataToArray = this.userInputValue
        .split(',')
        .map((item: any) => item.trim());
      for (let index = 0; index < dataToArray.length; index++) {
        const element = dataToArray[index];
        console.log('this is element ', element);
        this.openNewTab(element);
        // this.openNewTabToSearchImages(element)
      }
    } else if (this.filterValue == 'withNewLine') {
      dataToArray = this.userInputValue
        .split('\n')
        .map((item: any) => item.trim());
      console.log('this is data ', dataToArray);
      for (let index = 0; index < dataToArray.length; index++) {
        const element = dataToArray[index];
        console.log('this is element ', element);
        this.openNewTab(element);
        // this.openNewTabToSearchImages(element)
      }
    }
  }

  openNewTab(searchValue: any) {
    const url = 'https://www.google.co.in/search?q=' + searchValue;
    // const url = 'https://www.google.co.in/search?q=' + searchValue + '?gl=us&hl=en&pws=0&gws_rd=cr';
    window.open(url, '_blank');
  }

  openNewTabToSearchImages(searchValue: any) {
    const url = 'https://www.google.co.in/search?q=' + searchValue + ' images';
    window.open(url, '_blank');
  }

  onSubmit(){
    // if(this.isSearchingImg){
    //   this.openNewTabToSearchImages(searchValue);
    // } else {

    // }
  }

  // todo
  // add market + cagr
  // also add search images option


  searchUrl(){
    const encodedUrl = encodeURIComponent('https://exactitudeconsultancy.com/reports/35852/greeting-cards-market/');
    const googleSearchUrl = `https://www.google.com/search?q=${encodedUrl}?gl=us&hl=en&pws=0&gws_rd=cr`;
    window.location.href = googleSearchUrl;

  }
}
