import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { IngresoVoluntadComponent } from "./components/ingreso-voluntad/ingreso-voluntad.component";
import { VoluntadComponent } from "./components/voluntad/voluntad.component";
import { ListaVoluntadesComponent } from "./components/lista-voluntades/lista-voluntades.component";
import { PropuestaComponent } from "./components/propuesta/propuesta.component";
import { TransaccionComponent } from "./components/transaccion/transaccion.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule
} from "@nebular/theme";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    IngresoVoluntadComponent,
    VoluntadComponent,
    ListaVoluntadesComponent,
    PropuestaComponent,
    TransaccionComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
