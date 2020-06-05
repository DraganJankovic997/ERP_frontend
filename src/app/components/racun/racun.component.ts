import { Component, OnInit } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  constructor(private racunService: RacunService, private route: ActivatedRoute) { }

  racun;
  vozila;
  ngOnInit(): void {
    this.getRacun();
  }

  getRacun() {
    this.racunService.getRacunById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.racun = res;
      this.vozila = res['vozilaSaRacuna'];
    })
  }

}
