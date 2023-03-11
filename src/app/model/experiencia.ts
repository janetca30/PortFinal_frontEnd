export class Experiencia {
    id?: number;
    nombreE : string;
    descripcionE: string;
    imgE: string;
    puestoE: string;
    fechaI: string;
    fechaT: string;
    

    constructor(nombreE:string, descripcionE:string, imgE:string, puestoE:string, fechaI:string, fechaT:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.puestoE = puestoE;
        this.fechaI = fechaI;
        this.fechaT = fechaT;
        
    }
}
