import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent {

  cursos = {
    "titulo":"Curso 1",
    "descripcion": "Curso para docentes",
    "precio": 5420,
    "dirigido": "Docentes nivel primario",
    "imagen": "assets/img/docentes.jpg"
  }

}
