import { Component, OnInit } from '@angular/core';
import { CursosCarritoService } from '../cursos-carrito.service';
import { Curso } from './cursos';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[] = [
    {
      titulo: 'Curso 1',
      descripcion: 'Curso para docentes',
      precio: 5420,
      dirigido: "Docentes nivel primario",
      imagen: "assets/img/docentes.jpg",
      oferta: false,
    },
    {
      titulo: 'Curso 2',
      descripcion: 'Curso para cantantes',
      precio: 4420,
      dirigido: "Cantantes aficionados",
      imagen: "assets/img/docentes.jpg",
      oferta: true,
    },
    {
      titulo: 'Curso 3',
      descripcion: 'Curso para publico en general',
      precio: 6420,
      dirigido: "Publico en general",
      imagen: "assets/img/docentes.jpg",
      oferta: false,
    },
    {
      titulo: 'Curso 4',
      descripcion: 'Curso para publico en general',
      precio: 16420,
      dirigido: "Publico en general",
      imagen: "assets/img/docentes.jpg",
      oferta: true,
    },
  ];

  constructor(private carritoService: CursosCarritoService){}
  
  ngOnInit(): void {
  }

  agregrarAlCarrito(curso: Curso): void {
    this.carritoService.agregrarAlCarrito(curso);
  }
}
