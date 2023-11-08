import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ServicelandmarkcompoundService {
  private BaseUrlCompoundlandmarks: string =
    '/api/CompoundLandMarks/GetLandmarkCompoundByCompound/';

    private BaseUrlDownLoadFile: string =
    '/api/Compound/DownloadFile/{id}';

  constructor(private http: HttpClient) {}
  getlandmaksByCompoundId(compoundId: number) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrlCompoundlandmarks}${compoundId}`
    );
  }

  DownloadFile(id: any) {
    return this.http.get(
      `${env.apirooturl}${this.BaseUrlDownLoadFile}${id}`
    );
  }


}
