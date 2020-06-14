import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZaposleniService } from 'src/app/services/zaposleni.service';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { ProdavacInput } from 'src/app/models/prodavacInsert';



@Component({
  selector: 'app-prodavac-add',
  templateUrl: './prodavac-add.component.html',
  styleUrls: ['./prodavac-add.component.css']
})
export class ProdavacAddComponent implements OnInit {

  constructor(
    private zaposleniService: ZaposleniService,
    private prodavacService: ProdavacService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService

  ) { }

  prodavacForm: FormGroup;
  dodatProdavac: ProdavacInput = new ProdavacInput();

  ngOnInit(): void {
    this.prodavacForm = this.fb.group({
      prodavac: this.fb.group({
        broj_dozvole: ['', [Validators.required]],
      }),
      zaposleni: this.fb.group({
        ime: ['', [Validators.required]],
        prezime: ['', [Validators.required]],
        jmbg: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), , Validators.pattern('[0-9]*')]]
      })
    });
  }

  dodajProdavca() {
    this.zaposleniService.addZaposleni(this.prodavacForm.get('zaposleni').value)
    .subscribe((res) => {
      this.dodatProdavac.broj_prodaji = 0;
      this.dodatProdavac.broj_dozvole = this.prodavacForm.get('prodavac').value['broj_dozvole'];
      this.dodatProdavac.id = res[0]['id'];

      this.prodavacService.addProdavac(this.dodatProdavac)
      .subscribe((res) => {
        this.toastr.success('Prodavac uspesno dodat', 'Prodavac dodat');
        this.router.navigate(['/zaposleni']);
      }, (err) => {
        this.toastr.error('Greska prolikom dodavanja prodavca', 'Greska');
        this.router.navigate(['/zaposleni']);
      })
    }, (err) => {
      this.toastr.error('Greska prilikom dodavanja zaposlenog', 'Greska');
      this.router.navigate(['/zaposleni']);
    })
  }

  get ime() {
    return this.prodavacForm.get('zaposleni').get('ime');
  }
  get prezime() {
    return this.prodavacForm.get('zaposleni').get('prezime');
  }
  get jmbg() {
    return this.prodavacForm.get('zaposleni').get('jmbg');
  }
  get broj_dozvole() {
    return this.prodavacForm.get('prodavac').get('broj_dozvole');
  }

}
