import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  constructor( private http:HttpClient) { }


  nuevoReclamo(reclamo){
    return this.http.post( "http://localhost:3000/reclamos", reclamo );
  }


  
}
