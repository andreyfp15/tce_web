import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public createUser(user: any){
    return this.http.post(environment.API + 'user', user);
  }

//   public search(filter: any){
//     return this.http.post(environment.API + 'backlog/search',filter);
//   }

//   public details(id:number){
//     return this.http.post(environment.API + 'backlog/details', id);
//   }

//   public create(){
//     return this.http.get(environment.API + 'backlog/create');
//   }

//   public edit(id:number){
//     return this.http.post(environment.API + 'backlog/edit', id);
//   }

//   public getProjectsBySector(sectorId: number){
//     return this.http.post(environment.API + 'backlog/getprojectsbysector',sectorId);
//   }

//   public getFeatureTypesByProject(projectId: number){
//     return this.http.post(environment.API + 'backlog/getfeaturetypesbyproject',projectId);
//   }

//   public getFeaturesByFeaturesType(featureTypeId: number){
//     return this.http.post(environment.API + 'backlog/getfeaturesbyfeaturetype',featureTypeId);
//   }

//   public insert(backlog: any){
//     return this.http.post(environment.API + 'backlog/insert', backlog);
//   }

//   public update(backlog: any){
//     return this.http.post(environment.API + 'backlog/update', backlog);
//   }

}
