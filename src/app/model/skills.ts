export class Skills {
    id?: number;
    imgS: string;
    porcentaje: number;
    nombre: string;

    constructor(imgS: string, porcentaje: number, nombre: string) {
        this.imgS = imgS;
        this.porcentaje = porcentaje;
        this.nombre = nombre;
    }
}