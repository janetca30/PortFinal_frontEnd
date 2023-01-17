export class Educacion {
    id?: number;
    imgEstudio: string;
    tituloEstudio: string;
    anio: string;
    descripcionEstudio: string;

    constructor(imgEstudio: string, tituloEstudio: string, anio: string, descripcionEstudio: string) {
        this.imgEstudio = imgEstudio;
        this.tituloEstudio = tituloEstudio;
        this.anio = anio;
        this.descripcionEstudio = descripcionEstudio;
    }
}
