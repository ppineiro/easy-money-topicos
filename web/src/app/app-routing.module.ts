import { FichaVoluntadComponent } from './components/ficha-voluntad/ficha-voluntad.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoVoluntadComponent } from './components/ingreso-voluntad/ingreso-voluntad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';
import { VoluntadComponent } from './components/voluntad-tarjeta/voluntad.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'ingreso-voluntad', component: IngresoVoluntadComponent },
  { path: 'voluntad/:id', component: VoluntadComponent },
  { path: 'ingreso-voluntad', component: IngresoVoluntadComponent },
  { path: 'voluntad', component: VoluntadComponent },
  { path: 'propuestas', component: PropuestasComponent },
  { path: 'ficha-voluntad', component: FichaVoluntadComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
