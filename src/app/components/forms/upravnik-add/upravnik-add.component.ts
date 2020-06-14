import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZaposleniService } from 'src/app/services/zaposleni.service';
import { UpravnikService } from 'src/app/services/upravnik.service';
import { UpravnikInput } from 'src/app/models/upravnikInsert';


@Component({
  selector: 'app-upravnik-add',
  templateUrl: './upravnik-add.component.html',
  styleUrls: ['./upravnik-add.component.css']
})
export class UpravnikAddComponent implements OnInit {

  constructor(
    private zaposleniService: ZaposleniService,
    private upravnikService: UpravnikService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService

  ) { }

  upravnikForm: FormGroup;
  dodatUpravnik: UpravnikInput = new UpravnikInput();

  ngOnInit(): void {
    this.upravnikForm = this.fb.group({
      upravnik: this.fb.group({
        broj_telefona: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }),
      zaposleni: this.fb.group({
        ime: ['', [Validators.required]],
        prezime: ['', [Validators.required]],
        jmbg: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), , Validators.pattern('[0-9]*')]]
      })
    });

  }

  dodajUpravnika() {
    this.zaposleniService.addZaposleni(this.upravnikForm.get('zaposleni').value)
    .subscribe((res) => {
      this.dodatUpravnik.broj_ugovora = 0;
      this.dodatUpravnik.broj_telefona = this.upravnikForm.get('upravnik').value['broj_telefona'];
      this.dodatUpravnik.id = res[0]['id'];

      this.upravnikService.addUpravnik(this.dodatUpravnik)
      .subscribe((res) => {
        this.toastr.success('Upravnik uspesno dodat', 'Upravnik dodat');
        this.router.navigate(['/zaposleni']);
      }, (err) => {
        this.toastr.error('Greska prolikom dodavanja upravnika', 'Greska');
        this.router.navigate(['/zaposleni']);
      })
    }, (err) => {
      this.toastr.error('Greska prilikom dodavanja zaposlenog', 'Greska');
      this.router.navigate(['/zaposleni']);
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


}
