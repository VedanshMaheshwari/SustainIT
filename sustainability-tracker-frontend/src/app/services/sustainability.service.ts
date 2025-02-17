import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SustainabilityAction {
  id?: number; // Optional because the backend generates it
  action: string;
  date: string;
  points: number;
}

@Injectable({
  providedIn: 'root',
})
export class SustainabilityService {
  private apiUrl = 'http://localhost:3000/api/actions'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Fetch all actions
  getActions(): Observable<SustainabilityAction[]> {
    return this.http.get<SustainabilityAction[]>(this.apiUrl);
  }

  // Add a new action
  addAction(action: Omit<SustainabilityAction, 'id'>): Observable<SustainabilityAction> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<SustainabilityAction>(this.apiUrl, action, { headers });
  }
}