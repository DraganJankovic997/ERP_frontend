import { Component, OnInit } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoziloService } from 'src/app/services/vozilo.service';
import { ZaposleniService } from 'src/app/services/zaposleni.service';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  constructor(
    private racunService: RacunService, 
    private route: ActivatedRoute, 
    private toastr: ToastrService, 
    private router: Router,
    private fb: FormBuilder,
    private voziloService: VoziloService,
    private zaposleniService: ZaposleniService
    ) { }

  racun;
  vozila;

  sva_vozila;
  svi_prodavci;


  dodajVozilo: FormGroup;

  ngOnInit(): void {
    this.getRacun();
    this.getProdavciVozila();
    this.dodajVozilo = this.fb.group({
      racun_id: [Number(this.route.snapshot.paramMap.get('id')), [Validators.required]],
      prodavac_id: [null, [Validators.required]],
      vozilo_id: [null, [Validators.required]],
      cena: [null, [Validators.required, Validators.min(0)]],
    });
  }

  getRacun() {
    this.racunService.getRacunById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.racun = res;
      this.vozila = res['vozilaSaRacuna'];
    })
  }

  getProdavciVozila() {
    this.zaposleniService.getZaposleni()
    .subscribe((res) => {
      this.svi_prodavci = res['prodavci'];
    });
    this.voziloService.getNeprodata()
    .subscribe((res) => {
      this.sva_vozila = res;
    })
  }

  zatvoriRacun() {
    let racun = {
      kupac_id: this.racun.kupac.id,
      zatvoren: true
    };
    this.racunService.editRacun(racun, this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success('Racun je uspesno zatvoren', 'Racun je zatvoren');
      this.getRacun();
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom zatvaranja racuna', 'Greska');
      this.router.navigate(['/racuni']);
    })
  }

  obrisiRacun() {
    this.racunService.deleteRacun(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.toastr.success('Racun uspesno obrisan', 'Racun je obrisan');
      this.router.navigate(['/racuni']);
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom brisanja racuna', 'Greska');
      this.router.navigate(['/racuni']);
    })
  }

  dodajVoziloNaRacun() {
    this.racunService.dodajVoziloNaRacun(this.dodajVozilo.value)
    .subscribe((res) => {
      this.toastr.success('Vozilo je uspesno dodato na racun', 'Vozilo je dodato');
      this.getRacun();
    }, (err) => {
      this.toastr.error('Doslo je do greske prilikom dodavanja vozila na racun', 'Greska');
      console.log(err)
    })
  }

  get racun_id() {
    return this.dodajVozilo.get('racun_id');
  }
  get prodavac_id() {
    return this.dodajVozilo.get('prodavac_id');
  }
  get vozilo_id() {
    return this.dodajVozilo.get('vozilo_id');
  }
  get cena() {
    return this.dodajVozilo.get('cena');
  }

}
