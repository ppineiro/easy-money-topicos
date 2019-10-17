import { PropuestaModel } from './../../services/models/propuesta.model';
import { PropuestasService } from './../../services/propuestas.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.scss'],
})
export class PropuestaComponent {
  @Input() // <-----
  username: string;
  @Input() // <-----
  cotizacion: number;
  @Input() // <-----
  monto: number;

  constructor() {}

  rechazar() {}

  aceptar() {}
}
