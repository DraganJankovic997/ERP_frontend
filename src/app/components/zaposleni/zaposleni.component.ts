import { Component, OnInit } from '@angular/core';
import { ZaposleniService } from 'src/app/services/zaposleni.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  prodavci: Array<Object>;
  upravnici: Array<Object>;

  constructor(public zaposleniService: ZaposleniService,
              public router: Router) { }

  ngOnInit(): void {
    this.getZaposlenis();
  }


  getZaposlenis() {
    this.zaposleniService.getZaposleni().subscribe((res) => {
      this.prodavci=res['prodavci'];
      this.upravnici=res['upravnici'];
      console.log(this.prodavci);
      console.log(this.upravnici);
    })
  }

  pogledajProdavca(id) {
    this.router.navigate(['/prodavac/'+id]);
  }

  pogledajUpravnika(id) {
    this.router.navigate(['/upravnik/'+id]);
  }

}
