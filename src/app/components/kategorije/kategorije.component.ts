import { Component, OnInit } from '@angular/core';
import { KategorijaService } from 'src/app/services/kategorija.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css']
})
export class KategorijeComponent implements OnInit {

  constructor(private kategorijaService: KategorijaService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router) { }

  kategorije: Array<any>;
  kategorijaForm : FormGroup;

  ngOnInit(): void {
    this.getAll();
    this.kategorijaForm = this.fb.group ({
      naziv: ['', [Validators.required]],
      provizija: [null, [Validators.required, Validators.min(0.0), Validators.max(1.0)]]
    });
  }

  getAll() {
    this.kategorijaService.getKategorije().subscribe((res) => {
      this.kategorije = res;
    });
  }

  addKategorija() {
    this.kategorijaService.addKategorija(this.kategorijaForm.value)
    .subscribe((res) => {
      location.reload();
    }, (err) => {
      this.toastr.error(err.message, 'Error');
    })
  }

  izmeniKategoriju(id) {
    this.router.navigate([`/kategorija/edit/${id}`]);
  }

  obrisiKategoriju(id) {
    this.kategorijaService.deleteKategorija(id).subscribe((res) => {
      this.toastr.success('Kategorija uspesno obrisana', 'Uspeh');
      location.reload();
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
