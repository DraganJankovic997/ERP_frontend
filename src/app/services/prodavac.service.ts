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
}
