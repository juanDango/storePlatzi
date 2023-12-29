import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])

  cart = signal<Product[]>([])

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=15',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=200',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 4',
        price: 200,
        image: 'https://picsum.photos/640/640?r=102',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 5',
        price: 2100,
        image: 'https://picsum.photos/640/640?r=70',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 6',
        price: 300,
        image: 'https://picsum.photos/640/640?r=2000',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 7',
        price: 100,
        image: 'https://picsum.photos/640/640?r=43',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 8',
        price: 2050,
        image: 'https://picsum.photos/640/640?r=185',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 9',
        price: 30000,
        image: 'https://picsum.photos/640/640?r=2080',
        createdAt: new Date().toISOString()
      }
    ]

    this.products.set(initProducts)
  }

  addToCart(event: Product){
    this.cart.update(prevState => [...prevState, event])
  }
}
