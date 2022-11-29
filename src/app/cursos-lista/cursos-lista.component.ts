import { Component, OnInit } from '@angular/core';
import { CursosCarritoService } from '../service/cursos-carrito.service';
import { CursosDataService } from '../service/cursos-data.service';
import { Curso } from './cursos';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(
    private carritoService: CursosCarritoService,
    private cursosDataService: CursosDataService,) { 

    }

  ngOnInit(): void {
    this.cursosDataService.getAll()
    .subscribe(cursos => this.cursos = cursos);
  }

  agregrarAlCarrito(curso: Curso): void {
    this.carritoService.agregrarAlCarrito(curso);
  }

}
