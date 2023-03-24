import { Component, OnInit } from '@angular/core';
import { RedSocial } from '../../model/redsocial';
import { TokenService } from 'src/app/service/token.service';
import { RedsocialService } from 'src/app/service/redsocial.service';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  redsocial: RedSocial[]=[];
  isLogged = false;
  datos : any = {};
  
  constructor(private redsocialService: RedsocialService, 
    private tokenService: TokenService,
    private jsonService : JsonService,
    private router:Router){}

  
ngOnInit(): void {
  this.cargarRedSocial(); 
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

onLogout():void{
  this.tokenService.logOut();
  window.location.reload();
}

login(){
  this.router.navigate(['/login'])
}

cargarRedSocial(): void{
  this.redsocialService.lista().subscribe(
    data => {
      this.redsocial = data;
    }
  )
} 

delete(id?: number){
  if(id != undefined){
    this.redsocialService.delete(id).subscribe(
      data => {
        this.cargarRedSocial();
      },err => {
        alert("No se pudo borrar la red social");
      }
    )
  }
}
oculta = false;
ocultar(): void{
  this.oculta = !this.ocultar;
}
 

}
