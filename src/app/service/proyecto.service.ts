import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public getAllProjects():Observable<Proyecto[]>{
  return this.httpClient.get<Proyecto[]>(this.url + 'list');
  }

  public getProject(id:number){
    return this.httpClient.get<Proyecto>(this.url + `getOne/${id}`);
  }

  public newProject(proyecto: Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.url + 'new', proyecto);
  }

  public updateProject(proyecto: Proyecto):Observable<any>{
  const urlProyectoId = this.url + `edit/${proyecto.id}`;
    return this.httpClient.put<any>(urlProyectoId, proyecto);
  }

  public deleteProject(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
