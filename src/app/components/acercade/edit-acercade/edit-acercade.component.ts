import { Component, OnInit } from '@angular/core';
import { persona } from '../../../model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )  
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )  
  }
  uploadImage(_$event:any){

  }

}
