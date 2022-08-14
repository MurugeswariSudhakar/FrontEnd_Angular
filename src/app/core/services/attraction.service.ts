import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Config } from '../interfaces/config';
import { ConfigService } from './config.service';
import { Attraction } from '../models/attraction';
//import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  private baseUrl: any;
  private config: any;
  headers = new HttpHeaders({
    "Content-Type" : "application/json"
  });

  

  constructor(private http:HttpClient,private configService:ConfigService) {
    
   }
   
   getUrl() {
    
    this.baseUrl = "http://localhost:8080/explorer";

    // TRIED USING config.json file - TRY 1
    // this.configService.getConfig()
    // .subscribe((data) => this.config = { 
    //    baseUrl : (data as any).baseUrl
    //  });
    //  this.baseUrl = this.config.baseUrl;
    
    // TRY 2
    //Included in environment.ts Path: /src/environments/environment.ts
    //this.baseUrl = `${environment.apiUrl}`
   }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  listAll():Observable<Attraction[]> { 
    this.getUrl();
    console.log(this.baseUrl);
    const url = `${this.baseUrl}/attractions`;
    console.log(url);
    return this.http.get<Attraction[]>(url);
  }

  addAttraction(att:any){
    this.getUrl();
    const url = `${this.baseUrl}/newAttraction`;
    return this.http.post<any>(url,att);
  }

  getById(id:any):Observable<Attraction> {
    this.getUrl();
    const url= `${this.baseUrl}/searchAttraction/`;
    return this.http.get<Attraction>(url+id).pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any,attraction:any):Observable<Attraction> {
    this.getUrl();
    const url = `${this.baseUrl}/updateAttraction`;
    return this.http.put<Attraction>(`${url}/${id}`,attraction)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id:any) {
    this.getUrl();
    const url=`${this.baseUrl}/deleteAttraction`;
    return this.http.delete<Attraction>(`${url}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

}


