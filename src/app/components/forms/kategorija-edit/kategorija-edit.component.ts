import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategorija-edit',
  templateUrl: './kategorija-edit.component.html',
  styleUrls: ['./kategorija-edit.component.css']
})
export class KategorijaEditComponent implements OnInit {

  constructor(private kategorijaService: KategorijaService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute) { }


  kategorijaForm : FormGroup;
  kategorija;

  ngOnInit(): void {
    this.getKategorija();
    this.kategorijaForm = this.fb.group ({
      naziv: ['', [Validators.required]],
      provizija: [null, [Validators.required, Validators.min(0.0), Validators.max(1.0)]]
    });
  }

  getKategorija() {
    this.kategorijaService.getKategorijaById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.kategorija = res[0];
      this.kategorijaForm = this.fb.group ({
        id: [this.kategorija['id'], [Validators.required]],
        naziv: [this.kategorija['naziv'], [Validators.required]],
        provizija: [this.kategorija['provizija'], [Validators.required, Validators.min(0.0), Validators.max(1.0)]]
      });
    }, (err) => {
      this.toastr.error(err.message, 'Error');
    })
  }

  updateKategorija() {
    console.log(this.kategorijaForm.value);
    this.kategorijaService.updateKategorija(this.kategorijaForm.value, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success(res['message'], 'Kategorija izmenjena !');
      this.router.navigate(['/kategorija']);
    }, (err) => {
      this.toastr.error(err.message, 'Error');
    })
  }


  get naziv() {
    return this.kategorijaForm.get('naziv');
  }
  get provizija() {
    return this.kategorijaForm.get('provizija');
  }


}
