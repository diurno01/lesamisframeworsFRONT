export class Vuelo {
    id?: number;

    numeroDeVuelo: number;
    fechaYHora: Date;
    origen: string;
    destino: string;
    plazasPrimeraClase: number;
    plazasClaseTurista: number;
  

    constructor(numeroDeVuelo: number, fechaYHora: Date, origen: string, destino: string, plazasPrimeraClase: number, plazasClaseTurista: number){
        this.numeroDeVuelo = numeroDeVuelo;
        this.fechaYHora = fechaYHora;
        this.origen = origen;
        this.destino = destino;
        this.plazasPrimeraClase = plazasPrimeraClase;
        this.plazasClaseTurista = plazasClaseTurista;
    }
}
