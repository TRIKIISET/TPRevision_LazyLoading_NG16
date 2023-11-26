import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

const URL ="http://localhost:3000/logins";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(username:string, pwd:string):Observable<User[]>{
    return this.http.get<User[]>(`${URL}?username=${username}&pwd=${pwd}`);
  }

  public logout(){
    localStorage.removeItem('role');
  }
}
