import { Component, Input, OnInit } from '@angular/core';
import { EducacionService } from '../../../service/educacion.service';
import { Router } from '@angular/router';
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

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.tituloE, this.descripcionE, this.imgE, this.anioE);
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
