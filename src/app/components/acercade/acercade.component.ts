import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { persona } from 'src/app/model/persona';
import { TokenService } from '../../service/token.service';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit{
  isLogged = false;
  persona: persona = null;
  datos : any = {};
  
  constructor(public personaService: PersonaService, private tokenService: TokenService,private jsonService : JsonService
    ) { }  
  
  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    };
    this.jsonService.obtenerDatos().subscribe(
      (data : any ) => {
      this.datos = data;
    },
    (error: any) => {
      console.log(error);
    }
    );  
  }  
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
      );
  }  
}
