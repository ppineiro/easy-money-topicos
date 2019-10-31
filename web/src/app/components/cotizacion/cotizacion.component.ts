import { Component, OnInit } from '@angular/core';
import {BrouCotService} from 'src/app/services/broucot.service';
import {DivisaBrouModel} from 'src/app/services/models/divisabrou.model';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  public CotizacionList : Array <DivisaBrouModel> = [];
  constructor(private service: BrouCotService) { }

  ngOnInit() {
    this.service.getCotizacion().subscribe(
        data => {this.CotizacionList=data;},
        error => {alert('Error');}
    )
  }

}
