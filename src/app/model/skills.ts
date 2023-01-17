export class Skills {
    id?: number;
    imgHabilidad: string;
    porcentaje: number;
    nombre: string;

    constructor(imgHabilidad: string, porcentaje: number, nombre: string) {
        this.imgHabilidad = imgHabilidad;
        this.porcentaje = porcentaje;
        this.nombre = nombre;
    }
}