import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[]=[];
  isLogged = false;
  url: string = "";
  imageName: string = "";
  imageUrl: string;
  
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService,private router: Router, private storage: Storage){}

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe(data => {this.expe = data;})
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

