import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.css'],
  styles: ['.very-pale-red {background-color: #fff;}']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  today = new Date();

}
