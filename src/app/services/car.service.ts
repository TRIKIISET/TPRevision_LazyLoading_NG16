import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../classes/voiture';

const URL="http://localhost:3000/voitures"
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private http: HttpClient) { }

  public getCars():Observable<Voiture[]>{
    return this.http.get<Voiture[]>(URL);
  }

  public getCarById(id:number):Observable<Voiture>{
    return this.http.get<Voiture>(`${URL}/${id}`)
  }
  public addCar(c:Voiture):Observable<Voiture>{
    return this.http.post<Voiture>(URL, c);
  }
  public updateCar(id:number,c:Voiture):Observable<Voiture>{
    return this.http.put<Voiture>(URL+"/"+id, c);
  }
  public deleteCar(id:number){
    return this.http.delete(URL+"/"+id);
  }
}
