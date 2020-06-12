import { Component, OnInit } from '@angular/core';
import { KlijentiService } from 'src/app/services/klijenti.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-klijenti',
  templateUrl: './klijenti.component.html',
  styleUrls: ['./klijenti.component.css']
})
export class KlijentiComponent implements OnInit {

  klijenti;
  constructor(private klijentiService: KlijentiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getKlijenti();
  }

  getKlijenti() {
    this.klijentiService.getAll()
    .subscribe((res) => {
      this.klijenti = res;
    });
  }

  klijentRedirect(id) {
    this.router.navigate([`/klijent/${id}`]);
  }

  dodajKlijenta() {
    this.router.navigate([`/add/klijent`])
  }

}
