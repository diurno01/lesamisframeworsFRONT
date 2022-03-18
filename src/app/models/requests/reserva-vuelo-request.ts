export class ReservaVueloRequest {
    clase: string;
    idUsuario: number;
    idVuelo: number;
    idSucursal: number;

    constructor( clase: string, idUsuario: number, idVuelo: number,  idSucursal: number){
        this.clase = clase;
        this.idUsuario = idUsuario;        
        this.idVuelo =  idVuelo;
        this.idSucursal =  idSucursal;        
    }
}
