import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProducts(){
    const url ='https://api.escuelajs.co/api/v1/products'
    this.httpClient.get(url)
    .subscribe((response) => { console.log(response); });
  }

  getProduct(){
    const url ='https://api.escuelajs.co/api/v1/products/20'
    this.httpClient.get(url)
    .subscribe((response) => { console.log(response); });
  }

  createProduct(){
    const data = {
      title:'Libros',
      price:50,
      description:'Utiles escolares / Christian Aguirre',
      categoryId:1
    }
    const url ='https://api.escuelajs.co/api/v1/products'
    this.httpClient.post(url, data)
    .subscribe((response) => { console.log(response); });
  }
}
