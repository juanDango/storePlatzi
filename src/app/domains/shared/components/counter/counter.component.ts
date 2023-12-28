import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true})
  duration: number = 0;

  @Input({required: true})
  message: string = '';

  constructor() {
    // No se puede usar nada asincrono
    // Declarar variables directas
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    //Cada vez que enviemos un cambio, detecta los cambios
    console.log('ngOnChanges')
    console.log('-'.repeat(10))
    console.log(changes)
  }
}
