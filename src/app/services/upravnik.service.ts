import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UpravnikService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${environment.API}/upravnik`);
  }
  getUpravnikById(id) {
    return this.httpClient.get(`${environment.API}/upravnik/${id}`);
  }

  addUpravnik(data) {
    return this.httpClient.post(`${environment.API}/upravnik`, data);
  }
  updateUpravnik(data, id) {
    return this.httpClient.put(`${environment.API}/upravnik/${id}`, data);
  }

  deleteUpravnik(id) {
    return this.httpClient.delete(`${environment.API}/brisanje/upravnik/${id}`);
  }
}
