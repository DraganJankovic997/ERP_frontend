import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VoziloService } from 'src/app/services/vozilo.service';
import { ToastrService } from 'ngx-toastr';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { UpravnikService } from 'src/app/services/upravnik.service';

@Component({
  selector: 'app-vozilo-edit',
  templateUrl: './vozilo-edit.component.html',
  styleUrls: ['./vozilo-edit.component.css']
})
export class VoziloEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private voziloService: VoziloService,
    private klijentiService: KlijentiService,
    private kategorijaService: KategorijaService,
    private upravnikService: UpravnikService,
    private route: ActivatedRoute
  ) { }


  vozilo;
  klijenti;
  kategorije;
  upravnici;
  voziloForm: FormGroup;


  ngOnInit(): void {
    this.getKlijenti();
    this.getKategorije();
    this.getUpravnici();
    this.getVozilo();
  }

  getVozilo() {
    this.voziloService.getById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.vozilo = res[0];
      this.voziloForm = this.fb.group({
        vlasnik_id: [this.vozilo['vlasnik_id'], [Validators.required]],
        upravnik_id: [this.vozilo['upravnik_id'], [Validators.required]],
        kategorija_id: [this.vozilo['kategorija_id'], [Validators.required]],
        min_cena: [this.vozilo['min_cena'], [Validators.required, Validators.min(0)]],
        prodato: [this.vozilo['prodato'], [Validators.required]],
        opis: [this.vozilo['opis'], [Validators.required, Validators.minLength(20)]]
      })
    }, (err) => {
      this.toastr.error('Vozilo ne postoji', 'Greska');
      this.router.navigate(['/vozila']);
    })
  }
  izmeniVozilo() {
    console.log(this.voziloForm.value);
    this.voziloService.updateVozilo(this.voziloForm.value, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success('Vozilo uspesno izmenjeno', 'Vozilo izmenjeno');
      this.router.navigate([`/vozila/${this.route.snapshot.paramMap.get('id')}`]);
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
