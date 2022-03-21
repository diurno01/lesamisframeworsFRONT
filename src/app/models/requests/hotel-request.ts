export class HotelRequest {
    id: number;
    nombre: string;
    direccion: string;
    ciudad: string;
    telefono: string;
    numeroDePlazasDisponibles: number;
    

    constructor(id: number,  nombre: string, direccion: string, ciudad: string, telefono: string, numeroDePlazasDisponibles: number){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.numeroDePlazasDisponibles = numeroDePlazasDisponibles;      
      
    }
}
