import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RacunService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${environment.API}/racun`);
  }
  getRacunById(id) {
    return this.httpClient.get(`${environment.API}/racun/${id}`);
  }
  addRacun(data) {
    return this.httpClient.post(`${environment.API}/racun`, data);
  }
  editRacun(data, id) {
    return this.httpClient.put(`${environment.API}/racun/${id}`, data);
  }
  deleteRacun(id) {
    return this.httpClient.delete(`${environment.API}/racun/${id}`);
  }
  dodajVoziloNaRacun(data) {
    return this.httpClient.post(`${environment.API}/vozilo-racun`, data);
  }
  obrisiVoziloSaRacuna(data) {
    return this.httpClient.delete(`${environment.API}/vozilo-racun`, data);
  }
}
