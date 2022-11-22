import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from './cursos-lista/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosCarritoService {

  lista: Curso[] = [];

  constructor() { }

  agregrarAlCarrito(curso: Curso){
    let item: Curso = this.lista.find((valor1) => valor1.titulo == curso.titulo);
    if (!item) {
      this.lista.push({ ...curso });
    }
    console.log(this.lista); 
  }

  
  
}
