export class Usuario {

    id?: number;

    usuario: string;
    password: string;
    dni: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    email: string;
    tipo: string;

    constructor(usuario: string, password: string,dni: number, nombre: string, apellido: string, direccion: string, telefono: string, email: string, tipo: string) {
        this.usuario = usuario;
        this.password = password;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.tipo = tipo;

    }
}


