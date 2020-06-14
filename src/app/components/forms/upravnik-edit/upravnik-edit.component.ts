import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZaposleniService } from 'src/app/services/zaposleni.service';
import { UpravnikService } from 'src/app/services/upravnik.service';
import { UpravnikInput } from 'src/app/models/upravnikInsert';


@Component({
  selector: 'app-upravnik-edit',
  templateUrl: './upravnik-edit.component.html',
  styleUrls: ['./upravnik-edit.component.css']
})
export class UpravnikEditComponent implements OnInit {

  constructor(
    private zaposleniService: ZaposleniService,
    private upravnikService: UpravnikService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  upravnikForm: FormGroup;
  dodatUpravnik: UpravnikInput = new UpravnikInput();
  upravnik;
  ngOnInit(): void {
    this.getUpravnik();
  }

  izmeniUpravnika() {
    this.zaposleniService.updateZaposleni(this.upravnikForm.get('zaposleni').value, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.dodatUpravnik.broj_ugovora = this.upravnikForm.get('upravnik').value['broj_ugovora'];
      this.dodatUpravnik.broj_telefona = this.upravnikForm.get('upravnik').value['broj_telefona'];
      this.dodatUpravnik.id = this.upravnik['id'];

      this.upravnikService.updateUpravnik(this.dodatUpravnik, this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.toastr.success('Upravnik uspesno izmenjen', 'Upravnik izmenjen');
        this.router.navigate([`/upravnik/${this.route.snapshot.paramMap.get('id')}`]);
      }, (err) => {
        this.toastr.error('Greska prolikom izmene upravnika', 'Greska');
        this.router.navigate([`/upravnik/${this.route.snapshot.paramMap.get('id')}`]);
      })
    }, (err) => {
      this.toastr.error('Greska prilikom izmene zaposlenog', 'Greska');
      this.router.navigate([`/upravnik/${this.route.snapshot.paramMap.get('id')}`]);
    })
  }

  getUpravnik() {
    this.upravnikService.getUpravnikById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.upravnik = res;
      this.upravnikForm = this.fb.group({
        upravnik: this.fb.group({
          broj_telefona: [this.upravnik['broj_telefona'], [Validators.required, Validators.pattern('[0-9]*')]],
          broj_ugovora: [this.upravnik['broj_ugovora'], [Validators.required, Validators.min(0)]]
        }),
        zaposleni: this.fb.group({
          ime: [this.upravnik['ime'], [Validators.required]],
          prezime: [this.upravnik['prezime'], [Validators.required]],
          jmbg: [this.upravnik['jmbg'], [Validators.required, Validators.minLength(13), Validators.maxLength(13), , Validators.pattern('[0-9]*')]]
        })
      });
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja upravnika', 'Greska');
      this.router.navigate([`/upravnik/${this.route.snapshot.paramMap.get('id')}`]);
    })
  }





  get ime() {
    return this.upravnikForm.get('zaposleni').get('ime');
  }
  get prezime() {
    return this.upravnikForm.get('zaposleni').get('prezime');
  }
  get jmbg() {
    return this.upravnikForm.get('zaposleni').get('jmbg');
  }
  get broj_telefona() {
    return this.upravnikForm.get('upravnik').get('broj_telefona');
  }
  get broj_ugovora() {
    return this.upravnikForm.get('upravnik').get('broj_ugovora');
  }

}
