import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // styleUrls: ['./products.component.css'],
  styles: ['.container {background-color: #fff;}']
})
export class ProductsComponent implements OnInit {

	constructor(private router: Router) {}

  ngOnInit(): void {
  }

	navigateToServices(){
		this.router.navigate(['/services']);
	}

}
