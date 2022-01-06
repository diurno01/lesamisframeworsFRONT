export class Hotel {
   
    id?: number;

    nombre: string;
    direccion: string;
    ciudad: string;
    telefono: string;
    numeroDePlazas: number;
    precioPensionCompleta: number;
    precioMediaPension: number;

    constructor(nombre: string, direccion: string, ciudad: string, telefono: string, numeroDePlazas: number, precioPensionCompleta: number,     precioMediaPension: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.numeroDePlazas = numeroDePlazas;
        this.precioPensionCompleta = precioPensionCompleta;
        this.precioMediaPension = precioMediaPension;

    }
}
