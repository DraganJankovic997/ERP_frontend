import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-klijent-edit',
  templateUrl: './klijent-edit.component.html',
  styleUrls: ['./klijent-edit.component.css']
})
export class KlijentEditComponent implements OnInit {

  constructor(
    private klijentService: KlijentiService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  klijent;
  klijentForm: FormGroup;

  ngOnInit(): void {
    this.getKlijent();
    
  }

  getKlijent() {
    this.klijentService.getById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.klijent = res;
      this.klijentForm = this.fb.group({
        id: this.route.snapshot.paramMap.get('id'),
        ime: [this.klijent['ime'], [Validators.required]],
        prezime: [this.klijent['prezime'], [Validators.required]],
        email: [this.klijent['email'], [Validators.required, Validators.email]],
        broj_telefona: [this.klijent['broj_telefona'], [Validators.required, Validators.minLength(9), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
        jmbg: [this.klijent['jmbg'], [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('[0-9]*')]]
      });
    });
  }

  updateKlijent() {
    this.klijentService.updateKlijent(this.klijentForm.value, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success('Klijent uspesno izmenjen!', 'Klijent izmenjen!');
      this.router.navigate(['/klijent']);
    }, (err) => {
      this.toastr.error('Greska prilikom izmene klijenta', 'Greska');
      console.log(err);
    })
  }

  get ime() {
    return this.klijentForm.get('ime');
  }
  get prezime() {
    return this.klijentForm.get('prezime');
  }
  get email() {
    return this.klijentForm.get('email');
  }
  get broj_telefona() {
    return this.klijentForm.get('broj_telefona');
  }
  get jmbg() {
    return this.klijentForm.get('jmbg');
  }

}
