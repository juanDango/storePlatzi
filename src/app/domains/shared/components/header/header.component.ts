import { Component, Input, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) cart: Product[] = [];

  hideSideMenu = signal(true)

  toogleSideMenu(){
    this.hideSideMenu.update(prev => !prev)
  }
}
