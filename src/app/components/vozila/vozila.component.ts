import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VoziloService } from 'src/app/services/vozilo.service';
import { KategorijaService } from 'src/app/services/kategorija.service';

@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.css']
})
export class VozilaComponent implements OnInit {

  constructor(private vozilaService: VoziloService, private router: Router, private toastr: ToastrService, private kategorijaService: KategorijaService) { }

  sva_vozila: Array<any>;
  kategorije;
  // filter_kategorija;
  // filter_prodato;
  vozila;
  ngOnInit(): void {
    this.getVozila();
    this.getKategorije();
  }
  getVozila() {
    this.vozilaService.getAll()
    .subscribe((res)=> {
      this.sva_vozila = res;
      this.vozila = res;
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom ucitavanja vozila', 'Greska');
    });
  }

  getKategorije(){
    this.kategorijaService.getKategorije().subscribe((res) => {
      this.kategorije = res;
    });
  }

  voziloRedirect(id) {
    this.router.navigate([`/vozila/${id}`]);
  }

  // filter() {
    
  // }

}
