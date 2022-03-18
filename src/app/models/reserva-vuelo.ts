import { Sucursal } from "./sucursal";
import { Usuario } from "./usuario";
import { Vuelo } from "./vuelo";

export class ReservaVuelo {
    id?: number;

    clase: string;
    usuario: Usuario;
    vuelo : Vuelo;    
    sucursal : Sucursal;

    constructor(clase: string, usuario: Usuario, vuelo: Vuelo, sucursal : Sucursal){
        this.clase = clase;
        this.usuario = usuario;
        this.vuelo = vuelo;
        this.sucursal = sucursal;
    }
}
