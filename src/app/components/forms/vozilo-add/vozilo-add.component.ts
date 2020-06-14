import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoziloService } from 'src/app/services/vozilo.service';
import { ToastrService } from 'ngx-toastr';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { UpravnikService } from 'src/app/services/upravnik.service';



@Component({
  selector: 'app-vozilo-add',
  templateUrl: './vozilo-add.component.html',
  styleUrls: ['./vozilo-add.component.css']
})
export class VoziloAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private voziloService: VoziloService,
    private klijentiService: KlijentiService,
    private kategorijaService: KategorijaService,
    private upravnikService: UpravnikService
  ) { }
  
  klijenti;
  kategorije;
  upravnici;
  voziloForm: FormGroup;
  ngOnInit(): void {
    this.getKlijenti();
    this.getKategorije();
    this.getUpravnici();
    this.voziloForm = this.fb.group({
      vlasnik_id: [null, [Validators.required]],
      upravnik_id: [null, [Validators.required]],
      kategorija_id: [null, [Validators.required]],
      min_cena: [null, [Validators.required, Validators.min(0)]],
      prodato: [false, [Validators.required]],
      opis: [null, [Validators.required, Validators.minLength(20)]]
    })
  }

  dodajVozilo() {
    this.voziloService.addVozilo(this.voziloForm.value)
    .subscribe((res) => {
      this.toastr.success('Vozilo uspesno dodato', 'Vozilo dodato');
      this.router.navigate(['/vozila']);
    }, (err) => {
      this.toastr.error('Doslo je do greske, molimo pokusajte ponovo', 'Greska');
      this.router.navigate(['/vozila']);
    })
  }

  getKlijenti() {
    this.klijentiService.getAll().subscribe((res) => {
      this.klijenti = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja klijenata', 'Greska');
      this.router.navigate(['/vozila']);
    })
  }
  getKategorije() {
    this.kategorijaService.getKategorije().subscribe((res) => {
      this.kategorije = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja kategorija', 'Greska');
      this.router.navigate(['/vozila']);
    })
  }
  getUpravnici() {
    this.upravnikService.getAll().subscribe((res) => {
      this.upravnici = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja klijenata', 'Greska');
      this.router.navigate(['/vozila']);
    })
  }

  get vlasnik_id() {
    return this.voziloForm.get('vlasnik_id');
  }
  get upravnik_id() {
    return this.voziloForm.get('upravnik_id');
  }
  get kategorija_id() {
    return this.voziloForm.get('kategorija_id');
  }
  get min_cena() {
    return this.voziloForm.get('min_cena');
  }
  get prodato() {
    return this.voziloForm.get('prodato');
  }
  get opis() {
    return this.voziloForm.get('opis');
  }
}
