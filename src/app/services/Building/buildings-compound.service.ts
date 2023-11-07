import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class BuildingsCompoundService {
  compoundid: number = 0;
  BaseUrl: string = '/api/Building/BuildingsInCompound/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getbuildingsbycompound(compoundId: number) {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${compoundId}`);
  }
}
