import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './puppies.component.html'
})
export class PuppiesComponent implements OnInit {
  data = '';
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=stack&limit=10').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}