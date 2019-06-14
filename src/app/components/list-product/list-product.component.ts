import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any = [];
  constructor(private servicePro: StoreService) { }

  ngOnInit() {
    this.servicePro.product.subscribe((product: any) => {
      this.products.push(product);
    });
  }

}
