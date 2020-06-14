import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VoziloService } from 'src/app/services/vozilo.service';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { VozilaPipe } from '../../pipes/vozila.pipe';

@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.css']
})
export class VozilaComponent implements OnInit {

  constructor(private vozilaService: VoziloService, private router: Router, private toastr: ToastrService, private kategorijaService: KategorijaService) { }

  kategorije;
  vozila: Array<any>;
  maxPage: number;

  page: number=1;
  searchText: string;
  pageSize = 10;
  ngOnInit(): void {
    this.getVozila();
    this.getKategorije();
  }
  getVozila() {
    this.vozilaService.getAll()
    .subscribe((res)=> {
      this.vozila = res;
      this.vozila.sort((x,y) => {
        return x['prodato']-y['prodato'];
      })
      this.maxPage = Math.ceil(this.vozila.length / this.pageSize);
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom ucitavanja vozila', 'Greska');
    });
  }

  getKategorije(){
    this.kategorijaService.getKategorije().subscribe((res) => {
      this.kategorije = res; 
    });
  }

  dodajVozilo() {
    this.router.navigate(['/add/vozila']);
  }

  voziloRedirect(id) {
    this.router.navigate([`/vozila/${id}`]);
  }

  predhodna() {
    this.page = this.page -1;
  }

  sledeca() {
    this.page = this.page + 1;
  }


  

}
