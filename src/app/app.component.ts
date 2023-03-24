import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JsonService} from './service/json.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortFinal';

/*
  constructor(private http:HttpClient ){
    this.http.get('./assets/json/portfinal.json').subscribe(datos => {
      this.datoj = datos;
    });
  }

*/

}

