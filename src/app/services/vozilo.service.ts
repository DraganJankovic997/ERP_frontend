import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VoziloService {

  constructor(private httpClient: HttpClient) { }


  getAll() {
    return this.httpClient.get<Array<any>>(`${environment.API}/vozilo`);
  }

  getById(id) {
    return this.httpClient.get(`${environment.API}/vozilo/${id}`); 
  }

  addVozilo(data) {
    return this.httpClient.post(`${environment.API}/vozilo`, data, {responseType: 'text'});
  }

  updateVozilo(data, id) {
    return this.httpClient.put(`${environment.API}/vozilo/${id}`, data, {responseType: 'text'});
  }

  deleteVozilo(id) {
    return this.httpClient.delete(`${environment.API}/vozilo/${id}`, {responseType: 'text'});
  }
}
