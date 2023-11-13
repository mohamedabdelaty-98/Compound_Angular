import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  
  private BaseUrlDownLoadFile: string =
  '/api/Compound/DownloadFile/';

  constructor(private http: HttpClient) {}

  public DownloadFile(id: any): Observable<any> {
    return this.http.get(
      `${env.apirooturl}/api/Compound/DownloadFile/${id}`,{observe:'response',responseType:'blob'}
    );
  }


  public delete(id:number){
    return this.http.delete(
      `${env.apirooturl}/api/Compound/RemoveCompound/${id}`
    );
  }

}
