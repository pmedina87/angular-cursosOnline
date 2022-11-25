import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../cursos-lista/cursos';

const URL_API = 'https://637e6ea05b1cc8d6f92de6a6.mockapi.io/api/v1/cursos/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Curso[]> { //consultar todos los cursos de una API
    return this.http.get<Curso[]>(URL_API);
  }
}
