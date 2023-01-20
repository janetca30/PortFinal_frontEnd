export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    
    constructor(img: String, nombre: String, apellido: String) {
        this.img = img;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

