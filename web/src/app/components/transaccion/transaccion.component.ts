import { Component, OnInit } from '@angular/core';
import { PropuestaComponent } from '../propuesta/propuesta.component';
import { PropuestaModel } from 'src/app/services/models/propuesta.model';
import { DivisasService } from 'src/app/services/divisas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { VoluntadesService } from 'src/app/services/voluntades.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  providers: [VoluntadesService, DivisasService, UsuariosService],
})
export class TransaccionComponent implements OnInit {
  propuesta: string;
  voluntad: string;
  fecha: Date;
  califUsuarioVoluntad: number;
  califUsuarioPropuesta: number;
  cotizacionBCU: number;

  constructor(
    private voluntadesService: VoluntadesService,
    private divisasService: DivisasService,
    private usuariosService: UsuariosService,
  ) {}

  ngOnInit() {}

  llenarDatos() {}
}
