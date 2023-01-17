export class Experiencia {
    id?: number;
    nombreE : string;
    descripcionE: string;

    //imgExperiencia: string;
    //puesto: string;
    //fechaInicio: string;
    //fechaTermino: string;
    

    constructor(nombreE:string, descripcionE:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        
        
        //this.imgExperiencia = imgExperiencia;
        //this.puesto = puesto;
        //this.fechaInicio = fechaInicio;
        //this.fechaTermino = fechaTermino;
        
    }
}
