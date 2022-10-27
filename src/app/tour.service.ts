import { Injectable } from '@angular/core';
import {Tour} from "./model/tour";
import {Observable} from "rxjs";
const API_URl='http://localhost:3000/tuors';
@Injectable({
  providedIn: 'root'
})
export class TourService {

  // @ts-ignore
  constructor(private httpClient: HttpClient ) { }
  // @ts-ignore
  getAll():Observable<Tour[]>{
    // @ts-ignore
    return this.httpClient.get<Tour[]>(API_URl)
  }
  saveTour(tour:Tour):Observable<Tour>{
    return this.httpClient.post<Tour>(API_URl, tour);
  }
  getById(id: string):Observable<Tour>{
    return this.httpClient.get<Tour>(API_URl+`/${id}`);
  }
  editTour(id:string,tour:Tour): Observable<Tour>{
    return this.httpClient.put<Tour>(API_URl+`/${id}`,tour);
  }
  delete(id:any): Observable<Tour>{
    return this.httpClient.delete<Tour>(API_URl+`/${id}`);
  }
}
