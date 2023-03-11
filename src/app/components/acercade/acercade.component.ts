import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { persona } from 'src/app/model/persona';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit{
  isLogged = false;

  persona: persona = null;
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  
  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }
  
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
      );
  }  
}
