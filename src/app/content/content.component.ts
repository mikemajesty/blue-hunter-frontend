import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})

export class ContentComponent implements OnInit {

  private booksByTitle: Array<any>;
  private customersByTitle: Array<any>;
  private booksByAuthor: Array<any>;
  private searchFilter: Array<string> = ['author', 'title', 'customer'];
  private filter: string = '';

  constructor(private http: HttpClient) {
  }
 
  ngOnInit(): void {
  }

  onChange(val){
    console.log('afff', val);
    this.filter = val;
  }

  getBooksByTitle(item) {
    this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-title/${item}`).subscribe(data => {
      this.booksByTitle = <Array<any>>data;
    });
  }

  getCustomersByName(item) {
    this.http.get(`https://blue-hunter-backend-api.herokuapp.com/user/by-name/${item}`).subscribe(data => {
      this.customersByTitle = <Array<any>>data;
    });
  }

  getCustomersByAuthor(item) {
    this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-author/${item}`).subscribe(data => {
      this.booksByAuthor = <Array<any>>data;
    });
  }
}