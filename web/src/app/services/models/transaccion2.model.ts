import { VoluntadModel } from './voluntad.model';
import { PropuestaModel } from './propuesta.model';
import { Voluntad2Model } from './voluntad2.model';
import { Propuesta2Model } from './propuesta2.model';

export class Transaccion2Model {
  _id: string;
  voluntad: Voluntad2Model;
  propuesta: Propuesta2Model;
  fechaHora: Date;
  cotizacionBCU: number;
  califUsuarioVoluntad: number;
  califUsuarioPropuesta: number;
  _v: number;
}
