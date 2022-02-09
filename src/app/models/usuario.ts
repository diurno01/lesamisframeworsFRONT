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
    tipo: tipo;

    constructor(usuario: string, password: string,dni: number, nombre: string, apellido: string, direccion: string, telefono: string, email: string, tipo: tipo) {
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


enum tipo {
    ADMIN,
    VENDEDOR,
    CLIENTE
}