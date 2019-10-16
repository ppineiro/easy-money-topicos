import { VoluntadModel } from '../../services/models/voluntad.model';
import { VoluntadesService } from '../../services/voluntades.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntad',
  templateUrl: './voluntad.component.html',
  styleUrls: ['./voluntad.component.scss'],
})
export class VoluntadComponent {
  header: string;
  reputacion: number;
  usernombre: string;

  constructor(private service: VoluntadesService) {
    this.getData();
  }

  getData() {
    let data: VoluntadModel[] = [];
    this.service.getVoluntades().subscribe(voluntades => {
      console.log(voluntades);
      data = this.sustituirIntegracionesPorValores(voluntades);
      console.log(data);
      return data;
    });
  }

  sustituirIntegracionesPorValores(array: VoluntadModel[]): any[] {
    const resultado = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      resultado.push(element);
      this.reputacion = element.usuario.promedioCalif;
      this.usernombre = element.usuario.nombre;
      if ((element.operacion = 1)) {
        this.header = 'COMPRO ' + element.divisa.codigoISO + element.monto;
      } else {
        this.header = 'VENDO ' + element.divisa.codigoISO + element.monto;
      }
    }
    return resultado;
  }
}
