export class ReservaHotelRequest {
    idUsuario: number;
    idHotel: number;
    pension: string;
    idSucursal: number;
    fechaDeIngreso: Date;
    fechaDeEgreso: Date;

    constructor(idUsuario: number,idHotel: number, pension: string,idSucursal: number,fechaDeIngreso: Date, fechaDeEgreso: Date){
        this.idUsuario = idUsuario;
        this.idHotel = idHotel;
        this.pension =  pension;
        this.idSucursal =  idSucursal;
        this.fechaDeIngreso =  fechaDeIngreso;
        this.fechaDeEgreso = fechaDeEgreso;
    }
}
