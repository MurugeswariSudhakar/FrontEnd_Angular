import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Attraction } from '../models/attraction';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  private baseUrl = "http://localhost:8080/explorer";
  attractions:any=[];
  headers = new HttpHeaders({
    "Content-Type" : "application/json"
  });

  constructor(private http:HttpClient) { }

  listAll():Observable<any> { 
    const url = `${this.baseUrl}/attractions`;
    console.log(url);
    
    return this.http.get(url);
  }

}


