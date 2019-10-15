import { VoluntadModel } from "./voluntad.model";
import { PropuestaModel } from './propuesta.model';

export class TransaccionModel {
  _id: string;
  voluntad: VoluntadModel;
  propuesta: PropuestaModel;
  cotizacionBCU: number;
  califUsuarioVoluntad: number;
  califUsuarioPropuesta: number;
  _v: number;
}
