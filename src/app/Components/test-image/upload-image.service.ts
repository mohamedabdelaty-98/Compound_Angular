import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private httpClient: HttpClient) {}

  UploadImage(image:File,Id :number){
    const formData = new FormData();
    formData.append('file',image);
    const headers = new HttpHeaders();
    return this.httpClient.post(`http://localhost:52141/api/Image/UploadBuildingImage/${Id}`, formData, { headers });
  }
}
