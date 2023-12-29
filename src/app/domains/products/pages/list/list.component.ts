import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  private cartService = inject(CartService)
  private productSevice = inject(ProductService)
  private categoryService = inject(CategoryService)

  @Input()
  category_id?: string;

  ngOnInit(){
    this.getProducts()
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id']
    if(category_id){
      this.getProducts(category_id.currentValue)
    }
  }

  addToCart(event: Product){
    this.cartService.addToCart(event)
  }

  private getProducts(category_id?: string) {
    this.productSevice.getProducts(category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products)
      }
    })
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories)
      }
    })
  }
}
