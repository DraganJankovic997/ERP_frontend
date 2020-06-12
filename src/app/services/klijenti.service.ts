import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class KlijentiService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${environment.API}/klijent`);
  }

  getById(id) {
    return this.httpClient.get(`${environment.API}/klijent/${id}`);
  }

  addKlijent(data) {
    return this.httpClient.post(`${environment.API}/klijent`, data, {responseType: 'text'});
  }

  updateKlijent(data, id) {
    return this.httpClient.put(`${environment.API}/klijent/${id}`, data, {responseType: 'text'});
  }

  deleteKlijent(id) {
    return this.httpClient.delete(`${environment.API}/klijent/${id}`, {responseType: 'text'});
  }
}
