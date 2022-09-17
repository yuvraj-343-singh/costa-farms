import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }
  

  getData(MFGFCY_0: string, grouping: string, FRCSTRDAT_0: string, workCentre :string ) {
      let data = { MFGFCY_0:MFGFCY_0, grouping:grouping, FRCSTRDAT_0:FRCSTRDAT_0, workCentre:workCentre };
      return this.http.post<any>(`${environment.apiUrl}/data.php?method=getData`, data);
  }
}
