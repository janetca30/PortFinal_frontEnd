import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  imgP: string;
  nombreP: string;
  descripcionP: string;
  fechaP: string;
  linkP: string;

  constructor(private proyectoService: ProyectoService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP, this.linkP, this.fechaP);
    this.proyectoService.save(proyecto).subscribe(
      data=>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
