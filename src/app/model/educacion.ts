export class Educacion {
    id?: number;
    imgE: string;
    tituloE: string;
    anioE: string;
    descripcionE: string;

    constructor(imgE: string, tituloE: string, anioE: string, descripcionE: string) {
        this.imgE = imgE;
        this.tituloE = tituloE;
        this.anioE = anioE;
        this.descripcionE = descripcionE;
    }
}
