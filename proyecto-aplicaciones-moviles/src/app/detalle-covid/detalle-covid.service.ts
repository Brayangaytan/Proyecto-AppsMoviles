import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleCovidService {

  constructor(private http: HttpClient) { }

  getCovids(): Observable<any> {
    return this.http.get("https://disease.sh/v3/covid-19/all");
  }

  getCovidAll() :Observable<any>{
    return this.http.get<any>(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`,{});
  }

  getCovid(idCovid:string): Observable<any>{
    return this.http.get<any>(`https://disease.sh/v3/covid-19/all${idCovid}`,{});
  }
}

