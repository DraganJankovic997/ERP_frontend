import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UpravnikService {

  constructor(private httpClient: HttpClient) { }

  getUpravnikById(id) {
    return this.httpClient.get(`${environment.API}/upravnik/${id}`);
  }
}
