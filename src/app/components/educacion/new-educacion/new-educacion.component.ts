import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../../service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  tituloE: string;
  descripcionE: string;
  imgE: string;
  anioE: string;
  educacion : Educacion = null; 
  imageUrl: string;
  name: string;
  

  constructor(private educacionService: EducacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.descripcionE, this.anioE, this.imgE, this.tituloE);
    this.educacionService.save(educacion).subscribe(
      data=>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
 
}

