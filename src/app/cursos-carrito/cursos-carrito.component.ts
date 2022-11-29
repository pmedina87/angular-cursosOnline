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
  total$: Observable<number>;
  
  constructor(
    private carritoService: CursosCarritoService,
    ) {
      this.cursosAgregados$ = carritoService.lista.asObservable();
      this.total$ = carritoService.total.asObservable();
    }
    
  ngOnInit(): void {
    
  }

  quitarDeCarrito(curso: Curso) {
    this.carritoService.quitarDeCarrito(curso);
  }

}
