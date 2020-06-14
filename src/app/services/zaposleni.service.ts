import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {

  constructor(private httpClient: HttpClient) { }

  getZaposleni() {
    return this.httpClient.get(`${environment.API}/zaposleni`);
  }

  addZaposleni(data) {
    return this.httpClient.post(`${environment.API}/zaposleni`, data);
  }

  updateZaposleni(data, id) {
    return this.httpClient.put(`${environment.API}/zaposleni/${id}`,data);
  }
}
