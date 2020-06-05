import { Component, OnInit } from '@angular/core';
import { UpravnikService } from 'src/app/services/upravnik.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upravnik',
  templateUrl: './upravnik.component.html',
  styleUrls: ['./upravnik.component.css']
})
export class UpravnikComponent implements OnInit {

  upravnik;
  vozila;
  constructor(private upravnikService: UpravnikService, private route: ActivatedRoute) { }

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
}
