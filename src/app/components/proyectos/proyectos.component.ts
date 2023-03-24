import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { JsonService } from 'src/app/service/json.service'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto: Proyecto[]=[];
  isLogged = false;
  datos : any = {};

  constructor(private proyectoService: ProyectoService, 
    private tokenService: TokenService,
    private jsonService : JsonService){}

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
    this.jsonService.obtenerDatos().subscribe(
      (data : any ) => {
      this.datos = data;
    },
    (error: any) => {
      console.log(error);
    });
  }
  cargarProyecto(): void{
    this.proyectoService.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  } 

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        },err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }
}


