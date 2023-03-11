import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedSocial } from 'src/app/model/redsocial';
import { RedsocialService } from 'src/app/service/redsocial.service';

@Component({
  selector: 'app-new-red',
  templateUrl: './new-red.component.html',
  styleUrls: ['./new-red.component.css']
})
export class NewRedComponent implements OnInit{
  icono: string;
  link: string;
  nombre: string;

  constructor(private redsocialService: RedsocialService, private router: Router){}

  ngOnInit(): void {
  }

  onCreate(): void {
    const redsocial = new RedSocial(this.nombre, this.link, this.icono);
    this.redsocialService.save(redsocial).subscribe(
      data=>{
        alert("Red Social añadida");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}

