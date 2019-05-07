import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http:HttpClient) { }

  // Obtiene los post del servicio Rest
  // https://jsonplaceholder.typicode.com/posts/
  obtenerPosts(){
    return this.http.get( "https://jsonplaceholder.typicode.com/posts/" );
    
  }

}
