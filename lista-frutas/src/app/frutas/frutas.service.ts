import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frutas } from './frutas';

 
@Injectable({
  providedIn: 'root',
})
export class FrutasService {
  constructor(private http: HttpClient) {}


get() {
  return this.http.get<Frutas[]>('http://localhost:3000/frutas');
}

create(payload: Frutas) {
  return this.http.post<Frutas>('http://localhost:3000/frutas', payload);
}
getById(id: number) {
  return this.http.get<Frutas>(`http://localhost:3000/frutas/${id}`);
 }
  
 update(payload:Frutas){
  return this.http.put(`http://localhost:3000/frutas/${payload.id}`,payload);
 }
 delete(id:number){
  return this.http.delete<Frutas>(`http://localhost:3000/frutas/${id}`);
}
}


