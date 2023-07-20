import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompoundsService {
  private apiUrl = 'http://localhost:3000/compounds'; // Update the URL with your backend API endpoint

  constructor(private http: HttpClient) {}

  getCompounds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCompoundById(compoundId: number): Observable<any> {
    const url = `${this.apiUrl}/${compoundId}`;
    return this.http.get<any>(url);
  }

  updateCompoundDescription(
    compoundId: number,
    description: string
  ): Observable<any> {
    const url = `${this.apiUrl}/${compoundId}`;
    const requestBody = { description: description };
    return this.http.patch<any>(url, requestBody);
  }
}
