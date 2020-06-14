import { Component, OnInit } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-racuni',
  templateUrl: './racuni.component.html',
  styleUrls: ['./racuni.component.css']
})
export class RacuniComponent implements OnInit {

  constructor(
    private racunService: RacunService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  racuni;
  ngOnInit(): void {
    this.getRacuni();
  }

  getRacuni() {
    this.racunService.getAll()
    .subscribe((res) => {
      this.racuni = res;
    }, (err) => {
      this.toastr.error('Greska prilikom ucitavanja racuna', 'Greska')
    })
  }

  racunRedirect(id) {
    this.router.navigate([`/racun/${id}`]);
  }

}
