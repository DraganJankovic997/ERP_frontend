import { Component, OnInit } from '@angular/core';
import { VoziloService } from 'src/app/services/vozilo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vozilo',
  templateUrl: './vozilo.component.html',
  styleUrls: ['./vozilo.component.css']
})
export class VoziloComponent implements OnInit {

  constructor(private vozilaService: VoziloService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }


  vozilo;


  ngOnInit(): void {
    this.getVozilo();
  }

  getVozilo() {
    this.vozilaService.getById(this.route.snapshot.paramMap.get('id'))
    .subscribe((res) => {
      this.vozilo = res[0];
    })
  }

  obrisiVozilo() {
    this.vozilaService.deleteVozilo(this.route.snapshot.paramMap.get('id'))
    .subscribe((res)=> {
      this.toastr.success('Vozilo uspesno obrisano.', 'Vozilo obrisano!');
      this.router.navigate(['/vozila']);
    }, (err) => {
      this.toastr.error('Greska prilikom brisanja vozila', 'Greska!');
      this.router.navigate(['/vozila'])
    })
  }

  izmeniVozilo() {
    // this.router.navigate([`/edit/vozilo/${this.route.snapshot.paramMap.get('id')}`]);
    this.router.navigate(['/vozila']);
  }

}
