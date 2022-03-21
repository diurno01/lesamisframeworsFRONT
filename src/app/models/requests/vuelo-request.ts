export class VueloRequest {
    id: number;
    numeroDeVuelo: number;
    fechaYHora: Date;
    origen: string;
    destino: string;
    plazasTotales: number;
    plazasClaseTuristaDisponible: number;

    constructor(id: number, numeroDeVuelo: number, fechaYHora: Date, origen: string, destino: string, plazasTotales: number, plazasClaseTuristaDisponible: number){
        this.id = id;
        this.numeroDeVuelo = numeroDeVuelo;
        this.fechaYHora = fechaYHora;
        this.origen = origen;
        this.destino = destino;
        this.plazasTotales = plazasTotales;
        this.plazasClaseTuristaDisponible = plazasClaseTuristaDisponible;
      
    }
}
