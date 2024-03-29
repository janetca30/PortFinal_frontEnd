import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from '../../service/token.service';
import { Educacion } from 'src/app/model/educacion';
import { JsonService } from 'src/app/service/json.service'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion: Educacion[]=[];
  isLogged = false;
  datos : any = {};
 

  constructor(private educacionService: EducacionService, 
    private tokenService: TokenService,
    private jsonService : JsonService){}


  ngOnInit(): void {
    this.cargarEducacion();
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

  cargarEducacion(): void{
    this.educacionService.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  } 

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },err => {
          alert("No se pudo borrar educacion");
        }
      )
    }
  }
}
 