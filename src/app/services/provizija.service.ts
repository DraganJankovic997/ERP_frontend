import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProvizijaService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${environment.API}/provizija`);
  }

  deleteProvizija(data) {
    return this.httpClient.delete(`${environment.API}/provizija`, data);
  }
}
