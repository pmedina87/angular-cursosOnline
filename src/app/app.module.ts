import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosContactoComponent } from './cursos-contacto/cursos-contacto.component';
import { CursosHomeComponent } from './cursos-home/cursos-home.component';
import { CursosNosotrosComponent } from './cursos-nosotros/cursos-nosotros.component';
import { CursosCarritoComponent } from './cursos-carrito/cursos-carrito.component';
import { CursosListaCarritoComponent } from './cursos-lista-carrito/cursos-lista-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosListaComponent,
    CursosContactoComponent,
    CursosHomeComponent,
    CursosNosotrosComponent,
    CursosCarritoComponent,
    CursosListaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
