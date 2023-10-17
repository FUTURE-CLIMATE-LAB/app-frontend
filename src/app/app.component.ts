import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Product } from './models/product.model';
import { Message } from './models/message.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-frontend';
  http = inject(HttpClient);
  //products: Product[] = [];
  messages: Message[] = [];

  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit() {
    //this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      //.subscribe((data) => {
         //this.products = data;
      //});
      
     this.http.get<Message[]>('http://localhost:3200/api/message/get')
        .subscribe((data) => {
            this.messages = data;
     });
      
  }
}
