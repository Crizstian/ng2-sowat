import {Contacto} from './contacto.ts';

export class Clientes {
  constructor(
    public id:any,
    public nombre:string,
    public logo:string,
    public descripcion:string,
    public imagenes:string[],
    public contacto:Contacto
  ){}

}
