/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  loadData(MFGNUM_0: string) {
    return this.http.get<any>(`${environment.apiUrl}/data.php`, { params: { MFGNUM_0 } });
  }
  update(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/update.php`, data);
  }
}
