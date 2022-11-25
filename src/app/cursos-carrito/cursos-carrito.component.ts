import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosCarritoService } from '../service/cursos-carrito.service';
import { Curso } from '../cursos-lista/cursos';

@Component({
  selector: 'app-cursos-carrito',
  templateUrl: './cursos-carrito.component.html',
  styleUrls: ['./cursos-carrito.component.scss']
})
export class CursosCarritoComponent implements OnInit {

  cursosAgregados$: Observable<Curso[]>;
  total: number = 0;

  constructor(private carritoService: CursosCarritoService) {
    this.cursosAgregados$ = carritoService.lista.asObservable();
  }

  ngOnInit(): void {
  }

  incrementarTotal(curso: Curso){
    // let precio : number;
    // precio = this.carritoService.incrementarTotal(curso);
    // this.total += precio;
  }

  quitarDeCarrito(curso: Curso) {
    this.carritoService.quitarDeCarrito(curso);
  }



}
