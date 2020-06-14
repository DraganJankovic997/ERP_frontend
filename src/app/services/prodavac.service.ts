import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdavacService {

  constructor(private httpClient: HttpClient) { }

  getProdavacById(id) {
    return this.httpClient.get(`${environment.API}/prodavac/${id}`);
  }
  addProdavac(data) {
    return this.httpClient.post(`${environment.API}/prodavac`, data);
  }
  updateProdavac(data, id) {
    return this.httpClient.put(`${environment.API}/prodavac/${id}`, data);
  }
  deleteProdavac(id) {
    console.log('servis');
    return this.httpClient.delete(`${environment.API}/brisanje/prodavac/${id}`);
  }
}
