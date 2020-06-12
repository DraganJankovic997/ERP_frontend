import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-klijent-add',
  templateUrl: './klijent-add.component.html',
  styleUrls: ['./klijent-add.component.css']
})
export class KlijentAddComponent implements OnInit {

  constructor(
    private klijentService: KlijentiService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  klijentForm: FormGroup;


  ngOnInit(): void {
    this.klijentForm = this.fb.group({
      ime: ['', [Validators.required]],
      prezime: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      broj_telefona: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      jmbg: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('[0-9]*')]]
    });
  }


  addKlijent() {
    this.klijentService.addKlijent(this.klijentForm.value)
    .subscribe((res) => {
      this.toastr.success('Klijent uspesno dodat !', 'Klijent dodat!');
      this.router.navigate(['/klijent']);
    }, (err) => {
      this.toastr.error(err.message, 'Error');
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
