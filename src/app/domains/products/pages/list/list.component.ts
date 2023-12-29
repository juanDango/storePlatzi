import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService)
  private productSevice = inject(ProductService)

  ngOnInit(){
    this.productSevice.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products)
      }
    })
  }

  addToCart(event: Product){
    this.cartService.addToCart(event)
  }
}
