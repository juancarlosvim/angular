import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'Juancarlosvim';
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI =  Math.PI;
  a = 0.234;
}
