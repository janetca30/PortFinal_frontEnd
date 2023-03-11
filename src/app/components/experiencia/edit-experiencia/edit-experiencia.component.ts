import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../../model/experiencia';
import { ExperienciaService } from '../../../service/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab : Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
    
  }
  
}
