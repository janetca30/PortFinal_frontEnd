import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
url = 'http://localhost:8080/educacion/';

constructor(private httpClient:HttpClient) { }

  public getAllEducaciones():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'list');
  }

  public getEducation(id:number){
    return this.httpClient.get<Educacion>(this.url + `getOne/${id}`);
  }

  public newEducation(educacion:Educacion):Observable<Educacion>{
    return this.httpClient.post<Educacion>(this.url + 'new', educacion);
  }
  
  public updateEducation(educacion:Educacion):Observable<any>{
    const urlEducId = this.url + `edit/${educacion.id}`;
    return this.httpClient.put<any>(urlEducId, educacion);
  }
  
  public deleteEducation(id:number):Observable<any>{
    const urlEducId = this.url + `delete/${id}`;
    return this.httpClient.delete<any>(urlEducId);
  }
}