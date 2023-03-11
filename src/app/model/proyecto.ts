export class Proyecto {
    id?: number;
    imgP: string;
    nombreP: string;
    descripcionP: string;
    fechaP: string;
    linkP: string;

    constructor(imgP: string, nombreP: string, descripcionP: string, fechaP: string, linkP: string) {
        this.imgP = imgP;
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.linkP = linkP;
    }
}

