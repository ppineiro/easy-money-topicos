import { PropuestaModel } from './../../services/models/propuesta.model';
import { PropuestasService } from './../../services/propuestas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css'],
})
export class PropuestasComponent {
  data: PropuestaModel[] = [];
  resultado = [];

  constructor(private service: PropuestasService) {
    this.getData();
  }

  getData() {
    this.service.getPropuestas().subscribe(eventos => {
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
      this.resultado[index].username = element.usuario.nombre;
      this.resultado[index].cotizacion = element.cotizacionOf;
      this.resultado[index].moneda = element.voluntad.divisa.codigoISO;
    }
    return this.resultado;
  }
}
