import { Component, OnInit } from '@angular/core';
import { UpravnikService } from 'src/app/services/upravnik.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upravnik',
  templateUrl: './upravnik.component.html',
  styleUrls: ['./upravnik.component.css']
})
export class UpravnikComponent implements OnInit {

  upravnik;
  vozila;
  constructor(private upravnikService: UpravnikService, private route: ActivatedRoute, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getUpravnik();
  }

  getUpravnik() {
    this.upravnikService.getUpravnikById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.upravnik = res;
        let svaVozila = res['vozila'];
        this.vozila = svaVozila.filter(v => v.prodato == false);
      });
  }

  obrisiUpravnika() {
    this.upravnikService.deleteUpravnik(this.route.snapshot.paramMap.get('id'))
      .subscribe((res)=> {
        this.toastr.success(res['message'], 'Upravnik je obrisan');
        this.router.navigate(['/zaposleni']);
      }, (err) => {
        this.toastr.error(err.message, 'Error!');
      })
  }

  izmeniUpravnika() {
    this.router.navigate([`edit/upravnik/${this.route.snapshot.paramMap.get('id')}`])
  }
}
