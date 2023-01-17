export class Proyecto {
    id?: number;
    imgProyecto: string;
    nombreProyecto: string;
    descripcionProyecto: string;
    fecha: string;
    linkProyecto: string;

    constructor(imgProyecto: string, nombreProyecto: string, descripcionProyecto: string, fecha: string, linkProyecto: string) {
        this.imgProyecto = imgProyecto;
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.fecha = fecha;
        this.linkProyecto = linkProyecto;
    }
}

