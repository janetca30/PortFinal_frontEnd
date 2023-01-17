import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService { 
  url = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url + 'traer/perfil');
  }

  public getProfile(id:number) {
    const urlPersona = this.url + `details/${id}`;
    return this.http.get<persona>(urlPersona);
  }

  public updateProfile(persona: persona):Observable<any>{
    const urlPersona = this.url + `edit/${persona.id}`;
    return this.http.put<any>(urlPersona, persona);
  }
}