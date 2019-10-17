import { VoluntadModel } from '../../services/models/voluntad.model';
import { VoluntadesService } from '../../services/voluntades.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voluntad',
  templateUrl: './voluntad.component.html',
  styleUrls: ['./voluntad.component.scss'],
})
export class VoluntadComponent {
  @Input() // <-----
  header: string;
  @Input() // <-----
  reputacion: number;
  @Input() // <-----
  usernombre: string;
  @Input() // <-----
  voluntadid: string;
  data: VoluntadModel[] = [];

  constructor(private service: VoluntadesService) {
    // this.getData();
  }

  // getData() {
  //   this.service.getVoluntades().subscribe(eventos => {
  //     console.log(eventos);
  //     this.data = this.sustituirIntegracionesPorValores(eventos);
  //     console.log(this.data);
  //     return this.data;
  //   });
  // }

  // sustituirIntegracionesPorValores(array: VoluntadModel[]): any[] {
  //   const resultado = [];
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     resultado.push(element);
  //     this.reputacion = element.usuario.promedioCalif;
  //     this.usernombre = element.usuario.nombre;
  //     if ((element.operacion = 1)) {
  //       this.header = 'COMPRO ' + element.divisa.codigoISO + element.monto;
  //     } else {
  //       this.header = 'VENDO ' + element.divisa.codigoISO + element.monto;
  //     }
  //   }
  //   return resultado;
  // }
}
