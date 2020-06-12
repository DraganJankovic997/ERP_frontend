import { Component, OnInit } from '@angular/core';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-klijenti',
  templateUrl: './klijenti.component.html',
  styleUrls: ['./klijenti.component.css']
})
export class KlijentiComponent implements OnInit {

  klijenti;
  constructor(private klijentiService: KlijentiService, private router: Router) { }

  ngOnInit(): void {
    this.getKlijenti();
  }

  getKlijenti() {
    this.klijentiService.getAll()
    .subscribe((res) => {
      this.klijenti = res;
    });
  }

}
