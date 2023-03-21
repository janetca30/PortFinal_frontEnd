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
    const proyecto = new Proyecto(this.descripcionP,  this.nombreP, this.imgP,  this.linkP,  this.fechaP,);
    const date = new Date(this.fechaP);
    proyecto.fechaP = `${date.getFullYear()}-${(date.getMonth() + 0).toString().padStart(0, '0')}-${date.getDate().toString().padStart(0, '0')}`;
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

