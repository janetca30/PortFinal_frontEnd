import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class skillsService {
  url = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public getAllHS(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.url + 'list');
  }

  public getHardSkill(id:number) {
    return this.httpClient.get<Skills>(this.url + `getOne/${id}`);
  }

  public newSkills(skills:Skills):Observable<Skills>{
    return this.httpClient.post<Skills>(this.url + 'new', skills);
  }

  public updateSkills(skills: Skills):Observable<any>{
    const urlSkillsId = this.url + `edit/${skills.id}`;
    return this.httpClient.put<any>(urlSkillsId, skills);
  }

  public deleteSkills(id:number):Observable<any>{
    const urlSkillsId = this.url + `delete/${id}`;
    return this.httpClient.delete<any>(urlSkillsId);
  }
}
