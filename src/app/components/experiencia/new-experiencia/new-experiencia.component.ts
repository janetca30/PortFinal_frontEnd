import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;
  puestoE: string;
  fechaI: string;
  fechaT: string;

  constructor(private experienciaService: ExperienciaService, 
    private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.imgE, this.puestoE, this.fechaI, this.fechaT);
    const date = new Date(this.fechaI);
    const date1 = new Date(this.fechaT);
    expe.fechaI =  `${date.getFullYear()}-${(date.getMonth() + 0).toString().padStart(0, '0')}-${date.getDate().toString().padStart(0, '0')}`;
    expe.fechaT =  `${date.getFullYear()}-${(date.getMonth() + 0).toString().padStart(0, '0')}-${date.getDate().toString().padStart(0, '0')}`;
    this.experienciaService.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
 
}

