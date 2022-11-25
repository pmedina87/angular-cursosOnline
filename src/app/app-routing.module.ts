import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosContactoComponent } from './cursos-contacto/cursos-contacto.component';
import { CursosHomeComponent } from './cursos-home/cursos-home.component';
import { CursosListaCarritoComponent } from './cursos-lista-carrito/cursos-lista-carrito.component';
import { CursosNosotrosComponent } from './cursos-nosotros/cursos-nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: CursosHomeComponent
  },
  {
    path: 'home',
    component: CursosHomeComponent
  },
  {
    path: 'cursos',
    component: CursosListaCarritoComponent
  },
  {
    path: 'contacto',
    component: CursosContactoComponent
  },
  {
    path: 'nosotros',
    component: CursosNosotrosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
