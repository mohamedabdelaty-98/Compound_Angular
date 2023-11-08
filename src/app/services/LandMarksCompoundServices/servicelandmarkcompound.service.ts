import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicelandmarkcompoundService {
  private BaseUrlCompoundlandmarks: string =
    '/api/CompoundLandMarks/GetLandmarkCompoundByCompound/';

    private BaseUrlDownLoadFile: string =
    '/api/Compound/DownloadFile/{id}';

  constructor(private http: HttpClient) {}
  getlandmaksByCompoundId(compoundId: number): Observable<any> {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrlCompoundlandmarks}${compoundId}`
    );
  }

  DownloadFile(id: any): Observable<any> {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrlDownLoadFile}${id}`
    );
  }


}
