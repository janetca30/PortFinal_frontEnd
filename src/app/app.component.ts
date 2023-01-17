import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortFinal';
  datos: any;

  constructor(private http:HttpClient ){
    this.http.get('./assets/json/portfinal.json').subscribe(datos => {
      this.datos = datos;
    });
  }



}

