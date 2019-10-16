import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoVoluntadComponent } from './components/ingreso-voluntad/ingreso-voluntad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaPropuestasAVoluntadesComponent } from './components/lista-propuestas-a-voluntades/lista-propuestas-a-voluntades.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lista-propuestas-a-voluntades', component: ListaPropuestasAVoluntadesComponent},
  { path: 'ingreso-voluntad', component: IngresoVoluntadComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
