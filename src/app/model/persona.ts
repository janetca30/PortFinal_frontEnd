export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    puesto: string;
    img: string;
    banner: string;
    
    constructor(nombre: string, apellido: string, descripcion: string, puesto: string, img: string, banner: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.puesto = puesto;
        this.img = img;
        this.banner = banner;
    }
}

