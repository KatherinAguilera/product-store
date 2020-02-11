import { Directive, ElementRef } from '@angular/core';
// Decorador directive modificar algo especial en el DOM

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    // inyeccion de dependencia
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
  }

}