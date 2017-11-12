import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})

export class ContentComponent implements OnInit {

  booksByTitle: Array<any>;

  constructor(private http: HttpClient) {
  }
 
  ngOnInit(): void {
  }

  getBooksByTitle(item) {
    this.http.get(`https://blue-hunter-backend-api.herokuapp.com/book/by-title/${item}`).subscribe(data => {
      this.booksByTitle = <Array<any>>data;
    });
  }
}