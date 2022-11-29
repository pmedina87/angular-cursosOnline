import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from '../cursos-lista/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosCarritoService {

  private _lista: Curso[] = [];
  private _total: number = 0;

  lista: BehaviorSubject<Curso[]> = new BehaviorSubject(this._lista);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);

  constructor() { }

  agregrarAlCarrito(curso: Curso) {
    let item: Curso = this._lista.find((valor1) => valor1.titulo == curso.titulo)!;
    if (!item) {
      this._lista.push({ ...curso });
      this._total += curso.precio;
      this.lista.next(this._lista);
      this.total.next(this._total);
    }
    else {
      alert("El curso que intenta agregar, ya esta en su carrito");
    }
  }


  quitarDeCarrito(curso: Curso){
    let indice = this._lista.indexOf(curso);
    if(indice >= 0) {
      this._lista.splice(indice, 1);
    }
    this._total -= curso.precio;
    this.lista.next(this._lista);
    this.total.next(this._total);
  }

  
}

  


