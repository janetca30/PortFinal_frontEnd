import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[]=[];
  isLogged = false;
  datos : any = {};
  
  constructor(private experienciaService: ExperienciaService, 
    private tokenService: TokenService, 
    private jsonService : JsonService){}

  ngOnInit(): void {
    this.cargarExperiencia();
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
  
  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe(
      data => {
        this.expe = data;
      }
    )
  } 

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        },err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}

