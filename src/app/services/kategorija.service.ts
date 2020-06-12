import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class KategorijaService {

  constructor(private httpClient: HttpClient) { }

  getKategorije() {
    return this.httpClient.get<Array<any>>(`${environment.API}/kategorija`);
  }

  getKategorijaById(id) {
    return this.httpClient.get(`${environment.API}/kategorija/${id}`);
  }

  addKategorija(data) {
    return this.httpClient.post(`${environment.API}/kategorija`, data, {responseType: 'text'});
  }

  updateKategorija(data, id) {
    return this.httpClient.put(`${environment.API}/kategorija/${id}`, data);
  }

  deleteKategorija(id) {
      return this.httpClient.delete(`${environment.API}/kategorija/${id}`);
  }
}
