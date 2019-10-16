import { VoluntadModel } from './../../services/models/voluntad.model';
import { VoluntadesService } from './../../services/voluntades.service';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <tr *ngFor="let evento of eventos">
      <td>{{ evento.monto }}</td>
    </tr>
  `,

  providers: [VoluntadesService],
})
export class VoluntadTestComponent {
  news = [];
  placeholders = [];
  pageSize = 10;
  pageToLoadNext = 1;
  loading = false;
  eventos: VoluntadModel[] = [];

  constructor(private service: VoluntadesService) {
    this.getData();
  }

  getData() {
    this.service.getVoluntades().subscribe(eventos => {
      console.log(eventos);
      // data = this.sustituirIntegracionesPorValores(eventos);
      // console.log(data);
      return eventos;
    });
  }
}
