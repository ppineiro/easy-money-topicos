import { VoluntadModel } from '../../services/models/voluntad.model';
import { VoluntadesService } from '../../services/voluntades.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voluntades-lista',
  templateUrl: './voluntades-lista.component.html',
  providers: [VoluntadesService],
})
export class VoluntadesListaComponent {
  data: VoluntadModel[] = [];
  header: string;
  reputacion: number;

  resultado = [];

  constructor(private service: VoluntadesService, private router: Router) {
    this.getData();
  }

  getData() {
    this.service.getVoluntades().subscribe(eventos => {
      console.log(eventos);
      this.data = this.sustituirIntegracionesPorValores(eventos);
      console.log(this.data);
      return this.data;
    });
  }

  sustituirIntegracionesPorValores(array: VoluntadModel[]): any[] {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      this.resultado.push(element);
      this.resultado[index].reputacion = element.usuario.promedioCalif;
      this.resultado[index].nombre = element.usuario.nombre;
      this.resultado[index].id = element._id;
      if ((element.operacion = 1)) {
        this.resultado[index].header =
          'COMPRO ' + element.divisa.codigoISO + element.monto;
      } else {
        this.resultado[index].header =
          'VENDO ' + element.divisa.codigoISO + element.monto;
      }
    }
    return this.resultado;
  }

  verVoluntad(item: any) {
    let voluntadId;
    voluntadId = this.resultado[0].id;

    this.router.navigate(['/voluntad', voluntadId]);
  }
}
