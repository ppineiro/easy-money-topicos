import { PropuestasService } from './../../services/propuestas.service';
import { VoluntadesService } from 'src/app/services/voluntades.service';
import { PropuestaModel } from '../../services/models/propuesta.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ficha-voluntad',
  templateUrl: './ficha-voluntad.component.html',
  styleUrls: ['./ficha-voluntad.component.scss'],
})
export class FichaVoluntadComponent {
  @Input() // <-----
  idvoluntad = '5da799de090ef383079d6633';
  resultado = [];
  reputacion: number;
  nombre: string;
  voluntadid: string;
  divisa: string;
  monto: number;
  voluntad: string;
  data: PropuestaModel[] = [];

  constructor(private service: PropuestasService) {
    this.getData();
  }

  getData() {
    let data = this.service
      .getPropuestasPorVoluntad(this.idvoluntad)
      .subscribe(eventos => {
        console.log(eventos);
        this.data = this.sustituirIntegracionesPorValores(eventos);
        console.log(this.data);
        return this.data;
      });
  }

  sustituirIntegracionesPorValores(array: PropuestaModel[]): any[] {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      this.resultado.push(element);
      this.monto = element.voluntad.monto;
      this.resultado.push(element);
      this.reputacion = element.usuario.promedioCalif;
      this.nombre = element.usuario.nombre;
      this.voluntadid = element._id;
      if (element.voluntad.operacion === 1) {
        console.log(element.voluntad.divisa.codigoISO);
        this.voluntad = 'COMPRO ';
      } else {
        this.voluntad = 'VENDO ';
      }
      this.divisa = element.voluntad.divisa.codigoISO;
      this.resultado[index].username = element.usuario.nombre;
      this.resultado[index].cotizacion = element.cotizacionOf;
      this.resultado[index].moneda = element.voluntad.divisa.codigoISO;
    }
    return this.resultado;
  }
}
