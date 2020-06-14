import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ZaposleniService } from 'src/app/services/zaposleni.service';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { ProdavacInput } from 'src/app/models/prodavacInsert';


@Component({
  selector: 'app-prodavac-edit',
  templateUrl: './prodavac-edit.component.html',
  styleUrls: ['./prodavac-edit.component.css']
})
export class ProdavacEditComponent implements OnInit {

  constructor(
    private zaposleniService: ZaposleniService,
    private prodavacService: ProdavacService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  prodavacForm: FormGroup;
  dodatProdavac: ProdavacInput = new ProdavacInput();
  prodavac;

  ngOnInit(): void {
    this.getProdavac();
  }

  getProdavac() {
    this.prodavacService.getProdavacById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.prodavac = res;
      this.prodavacForm = this.fb.group({
        prodavac: this.fb.group({
          broj_dozvole: [this.prodavac['broj_dozvole'], [Validators.required]],
          broj_prodaji: [this.prodavac['broj_prodaji'], [Validators.required, Validators.min(0)]]
        }),
        zaposleni: this.fb.group({
          ime: [this.prodavac['ime'], [Validators.required]],
          prezime: [this.prodavac['prezime'], [Validators.required]],
          jmbg: [this.prodavac['jmbg'], [Validators.required, Validators.minLength(13), Validators.maxLength(13), , Validators.pattern('[0-9]*')]]
        })
      });
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja prodavca', 'Greska');
      this.router.navigate([`/prodavac/${this.route.snapshot.paramMap.get('id')}`]);
    })
  }

  izmeniProdavca() {
    this.zaposleniService.updateZaposleni(this.prodavacForm.get('zaposleni').value, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.dodatProdavac.broj_prodaji = this.prodavacForm.get('prodavac').value['broj_prodaji'];;
      this.dodatProdavac.broj_dozvole = this.prodavacForm.get('prodavac').value['broj_dozvole'];
      this.dodatProdavac.id = this.prodavac['id'];

      this.prodavacService.updateProdavac(this.dodatProdavac, this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.toastr.success('Prodavac uspesno izmenjen', 'Prodavac izmenjen');
        this.router.navigate([`/prodavac/${this.route.snapshot.paramMap.get('id')}`]);
      }, (err) => {
        this.toastr.error('Greska prilikom izmene prodavca', 'Greska');
        this.router.navigate([`/prodavac/${this.route.snapshot.paramMap.get('id')}`]);
      })
    }, (err) => {
      this.toastr.error('Greska prilikom izmene zaposlenog', 'Greska');
      this.router.navigate([`/prodavac/${this.route.snapshot.paramMap.get('id')}`]);
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
  get broj_prodaji() {
    return this.prodavacForm.get('prodavac').get('broj_prodaji');
  }



}
