import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class GitFloorsService {
  BaseUrl: string = '/api/Unit/getfloors/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getfloorsbycompoundid(compoundid: number) {
    return this.http.get(`${env.apirooturl}${this.BaseUrl}${compoundid}`);
  }
}
