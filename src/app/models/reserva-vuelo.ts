export class ReservaVuelo {
    id?: number;

    idUsuario: number;
    idVuelo: number;
    clase: string;
    idSucursal : number;

    constructor(idUsuario: number, idVuelo: number, clase: string, idSucursal : number){
        this.idUsuario = idUsuario;
        this.idVuelo = idVuelo;
        this.clase = clase;
        this.idSucursal = idSucursal;
    }
}
