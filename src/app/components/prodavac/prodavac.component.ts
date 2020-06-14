import { Component, OnInit } from '@angular/core';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit {

  prodavac;
  provizije;
  constructor(private prodavacService: ProdavacService, private route:ActivatedRoute, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.getProdavac();
  }

  getProdavac() {
    this.prodavacService.getProdavacById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.prodavac = res;
      this.provizije = res['provizije'];
    });
  }

  obrisiProdavca() {
    this.prodavacService.deleteProdavac(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.toastr.success(res['message'], 'Prodavac obrisan');
        this.router.navigate(['/zaposleni']);
      }, (err) => {
        this.toastr.error(err.message, 'Error!');
      })
  }

  izmeniProdavca() {
    this.router.navigate([`edit/prodavac/${this.route.snapshot.paramMap.get('id')}`])
  }

}
