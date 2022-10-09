import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  // styleUrls: ['./products-details.component.css'],
  styles: ['.container {background-color: #fff;}']
})
export class ProductsDetailsComponent implements OnInit {
  public selectedId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
