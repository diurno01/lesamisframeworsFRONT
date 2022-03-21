import { Hotel } from "./hotel";
import { Sucursal } from "./sucursal";
import { Usuario } from "./usuario";

export class ReservaHotel {
    id?: number;

    usuario: Usuario;
    hotel: Hotel;
    pension: string;
    sucursal: Sucursal;
    fechaDeIngreso: Date;
    fechaDeEgreso: Date;

    constructor(usuario: Usuario, hotel: Hotel, pension: string,sucursal: Sucursal,fechaDeIngreso: Date, fechaDeEgreso: Date){
        this.usuario = usuario;
        this.hotel = hotel;
        this.pension =  pension;
        this.sucursal =  sucursal;
        this.fechaDeIngreso =  fechaDeIngreso;
        this.fechaDeEgreso = fechaDeEgreso;
    }
}

