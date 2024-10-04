import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: '**', redirectTo: 'inicio' } // Redirige cualquier ruta no válida a 'inicio'
];