import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env} from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
baseUrl:string='/api/Image/UploadBuildingImage/';
  constructor(private httpClient: HttpClient) {}

  UploadImage(image:File,Id :number){
    const formData = new FormData();
    formData.append('file',image);
    const headers = new HttpHeaders();
    return this.httpClient.post(`${env.apirooturl}${this.baseUrl}${Id}`, formData, { headers });
  }
}
