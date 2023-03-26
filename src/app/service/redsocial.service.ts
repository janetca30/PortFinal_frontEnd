import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from '../model/redsocial';

@Injectable({
  providedIn: 'root'
})
export class RedsocialService {
  redURL = 'https://portfinal-janetca30.koyeb.app/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<RedSocial[]>{
    return this.httpClient.get<RedSocial[]>(this.redURL + 'lista');
  }

  public detail(id:number): Observable<RedSocial>{
    return this.httpClient.get<RedSocial>(this.redURL + `detail/${id}`);
  }

  public save(redes:RedSocial):Observable<any>{
    return this.httpClient.post<any>(this.redURL + 'create', redes);
  }
  
  public update(id: number, redes: RedSocial):Observable<any>{
    return this.httpClient.put<any>(this.redURL + `update/${id}`, redes);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.redURL + `delete/${id}`);
  }
}