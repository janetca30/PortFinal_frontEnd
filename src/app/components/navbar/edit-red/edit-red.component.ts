import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedSocial } from 'src/app/model/redsocial';
import { RedsocialService } from 'src/app/service/redsocial.service';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent implements OnInit{
  redsocial : RedSocial = null;

  constructor(private redsocialService: RedsocialService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.redsocialService.detail(id).subscribe(
      data =>{
        this.redsocial = data;
      }, err =>{
        alert("Error al modificar red social");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.redsocialService.update(id, this.redsocial).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar red social");
        this.router.navigate(['']);
      }
    )
    
  }
  
}
