import { Component, OnInit } from '@angular/core';
import { CursosCarritoService } from '../cursos-carrito.service';
import { Curso } from '../cursos-lista/cursos';

@Component({
  selector: 'app-cursos-carrito',
  templateUrl: './cursos-carrito.component.html',
  styleUrls: ['./cursos-carrito.component.scss']
})
export class CursosCarritoComponent implements OnInit {

  // cursosAgregados: Curso[];
  
  // constructor(private carritoService: CursosCarritoService) { }
  
  
  ngOnInit(): void {
  }

}
