import { VoluntadComponent } from './components/voluntad/voluntad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'voluntad', component: VoluntadComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // other imports here
  ],
})
export class AppRoutingModule {}
