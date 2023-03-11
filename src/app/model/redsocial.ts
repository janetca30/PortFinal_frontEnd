export class RedSocial {
    id?: number;
    icono: string;
    link: string;
    nombre: string;

    constructor(icono: string, link: string, nombre: string) {
        this.icono = icono;
        this.link = link;
        this.nombre = nombre;
    }
}