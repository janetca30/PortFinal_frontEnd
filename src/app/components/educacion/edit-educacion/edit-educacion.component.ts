import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../../model/educacion';
import { EducacionService } from '../../../service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion : Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
    
  } 
  
}
