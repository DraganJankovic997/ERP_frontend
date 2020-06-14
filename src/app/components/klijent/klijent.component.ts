import { Component, OnInit } from '@angular/core';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RacunService } from 'src/app/services/racun.service';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  constructor(
    private klijentService: KlijentiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private racunService: RacunService
  ) { }

  klijent;

  ngOnInit(): void {
    this.getKlijent();
  }

  getKlijent() {
    this.klijentService.getById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.klijent = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja klijenta', 'Greska!');
      console.log(err);
    })
  }

  toEdit() {
    this.router.navigate([`/edit/klijent/${this.route.snapshot.paramMap.get('id')}`]);
  }

  obrisiKlijenta() {
    this.klijentService.deleteKlijent(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success('Klijent uspesno obrisan', 'Klijent obrisan!');
      this.router.navigate(['/klijent']);
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom brisanja klijenta', 'Greska');
      this.router.navigate(['/klijent']);
    })
  }

  napraviRacun() {
    let racun = {
      kupac_id: this.route.snapshot.paramMap.get('id'),
      zatvoren: false
    }
    this.racunService.addRacun(racun)
    .subscribe((res) => {
      this.toastr.success('Racun uspesno napravljen', 'Racun napravljen');
      this.router.navigate(['/racuni']);
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom pravljenja racuna', 'Greska');
    })
  }

}
