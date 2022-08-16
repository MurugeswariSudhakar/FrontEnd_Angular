import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , catchError,throwError} from 'rxjs';
import { User } from '../models/user';
import {map} from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8080/explorer";
  private config:any;
users:any=[];
headers = new HttpHeaders({
  "Content-Type":"application/json"
});
  constructor(private http:HttpClient,private configService:ConfigService) { }

  getUserList():Observable<User[]>{
    const url= `${this.baseUrl}/users`;
    console.log(url);
    return this.http.get<User[]>(url);
    }

addUser(user:any){
  const url= `${this.baseUrl}/newUser`;
  console.log(url);
  return this.http.post<any>(url,user,{headers:this.headers});
}

getById(id:any):Observable<User>{
  const url= `${this.baseUrl}/searchUser/`;
  return this.http.get<User>(url+id).pipe(
    catchError(this.errorHandler));

}

errorHandler(error:any){
  let errorMessage='';
  if(error.error instanceof ErrorEvent){
    errorMessage=error.error.message;// Get client-side error
  }else{
    errorMessage=`Error Code: ${error.status}\nMessage: ${errorMessage}`; //Get Server-side error
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

update(id:any,user:any): Observable<User>{
  const url= `${this.baseUrl}/updateUser`;
  console.log(url);
  return this.http.put<User>(`${url}/${id}`,user)
                  .pipe(catchError(this.errorHandler));
}


delete(id:any){
  const url= `${this.baseUrl}/deleteUser`;
  console.log(url);
  return this.http.delete<User>(`${url}/${id}`)
      .pipe(catchError(this.errorHandler));
}
}


