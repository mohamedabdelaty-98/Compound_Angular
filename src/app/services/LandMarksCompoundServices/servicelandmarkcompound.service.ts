import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ServicelandmarkcompoundService {
  private BaseUrlCompoundlandmarks: string =
    '/api/CompoundLandMarks/GetLandmarkCompoundByCompound/';
  constructor(private http: HttpClient) {}
  getlandmaksByCompoundId(compoundId: any) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrlCompoundlandmarks}${compoundId}`
    );
  }
}
