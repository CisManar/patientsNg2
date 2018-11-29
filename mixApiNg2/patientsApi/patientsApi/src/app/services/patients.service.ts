import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPatient } from '../models/ipatient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  readonly url = "http://localhost/patientsApi/api/myApi/";

  getPatients(): Observable<IPatient[]>{
   return this.http.get<IPatient[]>(this.url);
  }
  getPatient(id):Observable<IPatient>{
   return this.http.get<IPatient>(this.url+id);
  }
  addPatient(patient:IPatient) :Observable<IPatient>{
   return this.http.post<IPatient>(this.url,patient,this.httpOptions);
  }
  updatePatient(id,patient:IPatient){
   return this.http.put(this.url+id,patient);
  }
  deletePatient(id){
   return this.http.delete(this.url+id);
  }
}
