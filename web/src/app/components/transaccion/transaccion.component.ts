import { UsuarioModel } from './../../services/models/usuario.model';
import { TransaccionCreateModel } from './../../services/models/transaccion.create.model';
import { TransaccionesService } from './../../services/transacciones.service';
import { Component, OnInit, Input } from '@angular/core';
import { PropuestaComponent } from '../propuesta/propuesta.component';
import { PropuestaModel } from 'src/app/services/models/propuesta.model';
import { DivisasService } from 'src/app/services/divisas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { VoluntadesService } from 'src/app/services/voluntades.service';
import { ActivatedRoute } from '@angular/router';
import { Transaccion2Model } from 'src/app/services/models/transaccion2.model';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  providers: [VoluntadesService, DivisasService, UsuariosService],
})
export class TransaccionComponent {
  fecha: Date;
  voluntadid: string;
  propuestaid: string;
  cotizacionBCU: number;
  califUsuarioVoluntad: number;
  califUsuarioPropuesta: number;
  uservol: string;
  userprop: string;
  transaccion: Transaccion2Model;
  usuario: UsuarioModel;

  constructor(
    private transaccionService: TransaccionesService,
    private userService: UsuariosService,

    private activatedRoute: ActivatedRoute,
    private service: UsuariosService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.transaccionService.getTransaccion2(params.id).subscribe(res => {
        this.transaccion = res;
        this.userService
          .getUsuario(this.transaccion.voluntad.usuario)
          .subscribe(user => {
            console.log(user);
            console.log(this.transaccion.voluntad);
            this.uservol =
              'Usuario de transaccion ' + this.transaccion.voluntad.usuario;
            this.userprop =
              'Usuario oferta ganadora ' + this.transaccion.propuesta.usuario;
            this.voluntadid = 'Monto: ' + ' ' + this.transaccion.voluntad.monto;
            this.propuestaid =
              'Cotizacion: ' + this.transaccion.propuesta.cotizacionOf;
            this.fecha = this.transaccion.fechaHora;
            this.cotizacionBCU = this.transaccion.cotizacionBCU;
            this.califUsuarioVoluntad = this.transaccion.califUsuarioVoluntad;
            this.califUsuarioPropuesta = this.transaccion.califUsuarioPropuesta;
          });
      });
    });
  }
}
