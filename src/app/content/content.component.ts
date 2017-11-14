import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})

export class ContentComponent implements OnInit {

  private customersByTitle: Array<any>;
  private searchBooks: Array<any>;
  private searchFilter: Array<string> = ['author', 'title', 'customer'];
  private filter: string = 'author';
  public loading = false;
  private search: string;

  constructor(private http: HttpClient) {
  }
 
  ngOnInit(): void {
  }

  onChange(val){
    this.filter = val;
  }

  searchByParameters() {
    if (this.filter.toLowerCase() === 'author') {
      console.log('search by author', this.search);
      this.loading = true;
        this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-title/${this.search}`).subscribe(data => {
        this.searchBooks = <Array<any>>data;
        console.log(this.searchBooks.length);
        this.loading = false;
      });
      return;
    }

    if (this.filter.toLowerCase() === 'title') {
      console.log('search by title', this.search);
      this.loading = true;
      this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-author/${this.search}`).subscribe(data => {
        this.searchBooks = <Array<any>>data;
        console.log(this.searchBooks.length);
        this.loading = false;
      });
      return;
    }

    if (this.filter.toLowerCase() === 'customer') {
      console.log('search by customer');
      this.loading = true;
      this.http.get(`https://blue-hunter-backend-api.herokuapp.com/user/by-name/${this.search}`).subscribe(data => {
        this.customersByTitle = <Array<any>>data;
        this.loading = false;
      });
      return;
    }
  }
}