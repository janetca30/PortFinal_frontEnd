export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string
    img: string;
    
    constructor(img: string, nombre: string, apellido: string, descripcion: string) {
        this.img = img;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
    }
}

