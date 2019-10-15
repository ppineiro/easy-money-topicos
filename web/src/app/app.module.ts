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
import { NbThemeModule } from "@nebular/theme";

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
  imports: [BrowserModule, AppRoutingModule, NbThemeModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
