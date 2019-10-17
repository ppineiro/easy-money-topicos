import { TransaccionCreateModel } from './../../services/models/transaccion.create.model';
import { TransaccionModel } from './../../services/models/transaccion.model';
import { TransaccionesService } from './../../services/transacciones.service';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() // <-----  propuestaid: string;
  propuestaid: string;
  @Input() // <-----  propuestaid: string;
  voluntad: string;
  @Input() // <-----  propuestaid: string;
  califUsuarioVoluntad: number;
  @Input() // <-----  propuestaid: string;
  califUsuarioPropuesta: number;
  transaccion: TransaccionModel;

  fecha: Date;
  cotizacionBCU: number;

  constructor(
    private voluntadesService: VoluntadesService,
    private divisasService: DivisasService,
    private transaccionService: TransaccionesService,
  ) {}

  ngOnInit() {}

  crearTransaccionModel(): TransaccionCreateModel {
    const voluntad: TransaccionCreateModel = {
      voluntad: this.voluntad,
      propuesta: this.propuestaid,
      cotizacionBCU: this.cotizacionBCU,
      califUsuarioVoluntad: this.califUsuarioVoluntad,
      califUsuarioPropuesta: this.califUsuarioPropuesta,
    };
    return voluntad;
  }

  insertVoluntad() {
    console.log(this.crearTransaccionModel());
    this.transaccionService
      .insertTransaccion(this.crearTransaccionModel())
      .subscribe(resp => {
        return (this.transaccion = resp);
      });
  }
}
