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
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 65
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout( () => resolve('llego la data!'), 3500);
  });

  fecha = new Date();
}
