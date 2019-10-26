import { UsuarioModel } from './usuario.model';
import { DivisaModel } from './divisa.model';

export class Voluntad2Model {
  _id: string;
  usuario: string;
  divisa: DivisaModel;
  monto: number;
  operacion: number;
  activo: boolean;
  _v: number;
}
