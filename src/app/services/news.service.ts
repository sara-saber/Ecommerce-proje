import { News } from './../models/news.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getAll(){
   return this.http.get('/');
  }
  update(data:News){
  return this.http.put('/',data);
  }
  add(data:News){
  return this.http.post('/',data);
  }
  delete(id:number){
    return this.http.delete('/'+id);
  }

}
