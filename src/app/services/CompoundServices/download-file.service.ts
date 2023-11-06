import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  
  private BaseUrlDownLoadFile: string =
  '/api/Compound/DownloadFile/';

  constructor(private http: HttpClient) {}

  public DownloadFile(id: any) {
    return this.http.get(
      `${env.apirooturl}/api/Compound/DownloadFile/${id}`,{observe:'response',responseType:'blob'}
    );
  }
}