import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true})
  product!: Product

  @Output()
  addToCart = new EventEmitter();

  fecha = signal<string>((new Date()).toISOString())

  addToCartHandler(){
    console.log(this.fecha())
    console.log(`Se espichó desde el hijo ${this.product.title}`)
    this.addToCart.emit(this.product)
  }
}
