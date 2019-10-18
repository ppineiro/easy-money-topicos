import { TransaccionCreateModel } from './../../services/models/transaccion.create.model';
import { TransaccionModel } from './../../services/models/transaccion.model';
import { TransaccionesService } from './../../services/transacciones.service';
import { Component, OnInit, Input } from '@angular/core';
import { PropuestaComponent } from '../propuesta/propuesta.component';
import { PropuestaModel } from 'src/app/services/models/propuesta.model';
import { DivisaModel } from 'src/app/services/models/divisa.model';
import { DivisasService } from 'src/app/services/divisas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { VoluntadesService } from 'src/app/services/voluntades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  providers: [VoluntadesService, DivisasService, UsuariosService],
})
export class DivisaComponent {
  fecha: Date;
  voluntadid: string;
  propuestaid: string;
  cotizacionBCU: number;
  califUsuarioVoluntad: number;
  califUsuarioPropuesta: number;

  constructor(
    private divisaService: DivisasService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.divisaService.getDivisa(params.id).subscribe(res => {
        // const divisa: DivisaModel = res;
        console.log(res);
        // this.voluntadid = divisa.voluntad._id;
        // this.propuestaid = divisa.propuesta._id;
        // this.fecha = divisa.fechaHora;
        // this.cotizacionBCU = divisa.cotizacionBCU;
        // this.califUsuarioVoluntad = divisa.califUsuarioVoluntad;
        // this.califUsuarioPropuesta = divisa.califUsuarioPropuesta;
      });
    });
  }

  // crearTransaccionModel(): TransaccionCreateModel {
  //   const voluntad: TransaccionCreateModel = {
  //     voluntad: this.voluntad,
  //     propuesta: this.propuestaid,
  //     cotizacionBCU: this.cotizacionBCU,
  //     califUsuarioVoluntad: this.califUsuarioVoluntad,
  //     califUsuarioPropuesta: this.califUsuarioPropuesta,
  //   };
  //   return voluntad;
  // }

  // insertVoluntad() {
  //   console.log(this.crearTransaccionModel());
  //   this.transaccionService
  //     .insertTransaccion(this.crearTransaccionModel())
  //     .subscribe(resp => {
  //       return (this.transaccion = resp);
  //     });
  // }
}
