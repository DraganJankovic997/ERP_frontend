import { Component, OnInit } from '@angular/core';
import { ProvizijaService } from 'src/app/services/provizija.service';
import { ToastrService } from 'ngx-toastr';
import { ProvizijaBrisanje } from 'src/app/models/provizijaBrisanje';

@Component({
  selector: 'app-provizije',
  templateUrl: './provizije.component.html',
  styleUrls: ['./provizije.component.css']
})
export class ProvizijeComponent implements OnInit {

  constructor(
    private provizijaService: ProvizijaService,
    private toastr: ToastrService
  ) { }

  provizije;
  provizijaBrisanje: ProvizijaBrisanje = new ProvizijaBrisanje();
  ngOnInit(): void {
    this.getProvizije();
  }

  getProvizije() {
    this.provizijaService.getAll()
    .subscribe((res) => {
      this.provizije = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja proviziji', 'Greska');
    })
  }


}
