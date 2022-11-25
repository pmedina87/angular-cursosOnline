import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from '../cursos-lista/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosCarritoService {

  private _lista: Curso[] = [];

  lista: BehaviorSubject<Curso[]> = new BehaviorSubject(this._lista);


  constructor() { }

  agregrarAlCarrito(curso: Curso) {
    let item: Curso = this._lista.find((valor1) => valor1.titulo == curso.titulo)!;
    if (!item) {
      this._lista.push({ ...curso });
    }
    this.lista.next(this._lista);
  }

  quitarDeCarrito(curso: Curso){
    let indice = this._lista.indexOf(curso);
    if(indice >= 0) {
      this._lista.splice(indice, 1);
    }
    this.lista.next(this._lista);
  }

  // incrementarTotal(curso: Curso) { 
  //   let item: Curso = this._lista.find((valor1) => valor1.titulo == curso.titulo)!;
  //   if (item) {
  //     return item.precio;
  //   }
  // }
}
