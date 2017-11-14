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
  private showMessage: boolean = false;

  constructor(private http: HttpClient) {
    
  }
 
  ngOnInit(): void {
  }

  onChange(val){
    this.filter = val;
  }

  searchByParameters() {
   
    if (this.filter.toLowerCase() === 'author') {
      this.loading = false;
      this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-author/${this.search}`).subscribe(data => {
        this.showMessage = false;
        this.searchBooks = <Array<any>>data;
        if (this.searchBooks.length === 0) 
          this.showMessage = true;
        this.loading = false;
      },
      error => {
        this.showMessage = true;
        this.loading = false;
      });
      return;
    }

    if (this.filter.toLowerCase() === 'title') {
      this.loading = true;
      this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-title/${this.search}`).subscribe(data => {
        this.showMessage = false;
        this.searchBooks = <Array<any>>data;
        if (this.searchBooks.length === 0) 
          this.showMessage = true;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.showMessage = true;
      });
      return;
    }

    if (this.filter.toLowerCase() === 'customer') {
      console.log('search by customer');
      this.loading = true;
      this.http.get(`https://blue-hunter-backend-api.herokuapp.com/user/by-name/${this.search}`).subscribe(data => {
        this.customersByTitle = <Array<any>>data;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.showMessage = true;
      });
      return;
    }
  }
}