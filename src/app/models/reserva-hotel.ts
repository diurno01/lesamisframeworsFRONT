export class ReservaHotel {
    id?: number;

    idHotel: number;
    pension: string;
    idSucursal: number;
    fechaDeIngreso: Date;
    fechaDeEgreso: Date;

    constructor(idHotel: number, pension: string,idSucursal: number,fechaDeIngreso: Date, fechaDeEgreso: Date){
        this.idHotel = idHotel;
        this.pension =  pension;
        this.idSucursal =  idSucursal;
        this.fechaDeIngreso =  fechaDeIngreso;
        this.fechaDeEgreso = fechaDeEgreso;
    }
}

