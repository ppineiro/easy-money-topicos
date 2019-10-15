import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DivisaModel } from "./models/divisa.model";
import { Observable } from "rxjs";

const API_URL = "http://localhost:8000/divisas";

@Injectable({
  providedIn: "root"
})
export class DivisasService {
  constructor(private http: HttpClient) {
    console.log("Service Listo");
  }

  getDivisas(): Observable<DivisaModel[]> {
    return this.http.get<DivisaModel[]>(API_URL);
  }
}
