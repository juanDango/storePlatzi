import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, SimpleChanges, signal } from '@angular/core';

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

  counter = signal(0)

  counterId: number | undefined = 0

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // No se puede usar nada asincrono
    // Declarar variables directas
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    //Cada vez que enviemos un cambio, detecta los cambios
    console.log('ngOnChanges')
    console.log(changes)
    console.log('-'.repeat(10))

    const duration = changes['duration'];
    if (duration) {
      this.doSomething()
    }
  }

  ngOnInit() {
    // Despues de renderizado
    // Corre una vez
    // Correr cosas asincronas, ejemplo, traer la lista de productos
    console.log('ngOnInit')
    console.log(`duration => ${this.duration}`)
    console.log(`message => ${this.message}`)
    console.log('-'.repeat(10))
   // Client only code.
   if (isPlatformBrowser(this.platformId)) {
    // write your client side code here
    this.counterId = window.setInterval(async () =>
      {
        console.log("Se actualiza")
        this.counter.update(old => old + 1)
      }, 1000)
    }
  }

  ngAfterViewInit() {
    //After render
    //Preguntar si los hijos del componente ya fueron renderizados
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10))
  }

  ngOnDestroy() {
    //Elimina
    //Prevenir memory leaks
    console.log('ngOnDestroy')
    console.log('-'.repeat(10))
    if (isPlatformBrowser(this.platformId)) {
      // write your client side code here
      // Si no hago esto, la tarea se queda consumiendo recursos
      // Fugas de memoria
      window.clearInterval(this.counterId)
    }
  }

  doSomething(){
    //Lo quiero ejecutar cada vez que cambie duration
    console.log("Changed duration")
  }
}
