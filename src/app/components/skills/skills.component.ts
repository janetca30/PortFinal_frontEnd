import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: Skills[]=[];
  isLogged = false;
  datos : any = {};

  constructor(private skillsService: SkillsService, 
    private tokenService: TokenService,
    private jsonService : JsonService){}

  ngOnInit(): void {
    this.cargarSkills();
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
  
  cargarSkills(): void{
    this.skillsService.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  } 

  delete(id?: number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        },err => {
          alert("No se pudo borrar skill");
        }
      )
    }
  }
}

