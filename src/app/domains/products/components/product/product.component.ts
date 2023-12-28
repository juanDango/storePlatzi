import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true})
  img: string = ''

  @Input({required: true})
  title: string = ''

  @Input({required: true})
  price: number = 0

  @Output()
  addToCart = new EventEmitter();

  addToCartHandler(){
    console.log(`Se espichó desde el hijo ${this.title}`)
    this.addToCart.emit(`Se ha emitido un evento muajaja ${this.title}`)
  }
}
