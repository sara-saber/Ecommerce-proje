import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  get(username:string,password:string){
    return this.http.get(''+username+password);
  }
  getAll(){
    return this.http.get('')
  }
  getbyid(id:number){
    return this.http.get('')
  }
  add(data:User){
    return this.http.post('',data)
  }
  update(id:number,data:User){
    return this.http.patch('',data)
  }
}
