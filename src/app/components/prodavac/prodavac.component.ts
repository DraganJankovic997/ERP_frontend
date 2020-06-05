import { Component, OnInit } from '@angular/core';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit {

  prodavac;
  provizije;
  constructor(private prodavacService: ProdavacService, private route:ActivatedRoute) { }

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

}
