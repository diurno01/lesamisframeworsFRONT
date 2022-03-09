export class Sucursal {
    id?: number;

    codigo: string;
    direccion: string;
    telefono: string;
    
    constructor(codigo: string, direccion: string,  telefono: string) {
        this.codigo = codigo;
        this.direccion = direccion;       
        this.telefono = telefono;      
    }
}
