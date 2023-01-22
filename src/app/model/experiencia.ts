export class Experiencia {
    id?: number;
    nombreE : string;
    descripcionE: string;
    imgE: string;
    puestoE: string;
    fInicioE: string;
    fTerminoE: string;
    

    constructor(nombreE:string, descripcionE:string, imgE:string, puestoE:string, fInicioE:string, fTerminoE:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.puestoE = puestoE;
        this.fInicioE = fInicioE;
        this.fTerminoE = fTerminoE;
        
    }
}
