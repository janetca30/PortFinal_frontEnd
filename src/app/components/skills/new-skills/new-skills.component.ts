import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit{
  imgS: string;
  porcentaje: number;
  nombre: string;

  constructor(private skillsService: SkillsService, private router: Router){}

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(this.nombre, this.porcentaje, this.imgS);
    this.skillsService.save(skills).subscribe(
      data=>{
        alert("Skills añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
