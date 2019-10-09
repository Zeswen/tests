import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(public http: HttpClient) {}

  getDoctors() {
    return this.http.get('...');
  }
}
