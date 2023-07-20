// compounds.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompoundsService {

  private apiUrl = 'http://localhost:3000/compounds'; // Update the URL with your backend API endpoint

  constructor(private http: HttpClient) { }

  getCompounds(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
