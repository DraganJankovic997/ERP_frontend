import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ZaposleniComponent } from './components/zaposleni/zaposleni.component';
import { VozilaComponent } from './components/vozila/vozila.component';
import { VoziloComponent } from './components/vozilo/vozilo.component';
import { RacuniComponent } from './components/racuni/racuni.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { UpravnikComponent } from './components/upravnik/upravnik.component';
import { RacunComponent } from './components/racun/racun.component';
import { KategorijeComponent } from './components/kategorije/kategorije.component';
import { KlijentiComponent } from './components/klijenti/klijenti.component';
import { KategorijaEditComponent } from './components/forms/kategorija-edit/kategorija-edit.component';
import { KlijentAddComponent } from './components/forms/klijent-add/klijent-add.component';
import { KlijentEditComponent } from './components/forms/klijent-edit/klijent-edit.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { VoziloAddComponent } from './components/forms/vozilo-add/vozilo-add.component';
import { VoziloEditComponent } from './components/forms/vozilo-edit/vozilo-edit.component';
import { ProdavacAddComponent } from './components/forms/prodavac-add/prodavac-add.component';
import { ProdavacEditComponent } from './components/forms/prodavac-edit/prodavac-edit.component';
import { UpravnikEditComponent } from './components/forms/upravnik-edit/upravnik-edit.component';
import { UpravnikAddComponent } from './components/forms/upravnik-add/upravnik-add.component';
import { ProvizijeComponent } from './components/provizije/provizije.component';
import { ProvizijaService } from './services/provizija.service';
import { VozilaPipe } from './pipes/vozila.pipe';


const ROUTES = [
  { path: '', component: VozilaComponent },
  { path:'zaposleni', component: ZaposleniComponent },
  { path: 'vozila', component: VozilaComponent },
  { path: 'racuni', component: RacuniComponent },
  { path: 'vozila/:id', component: VoziloComponent },
  { path: 'prodavac/:id', component: ProdavacComponent },
  { path: 'upravnik/:id', component: UpravnikComponent },
  { path: 'racun/:id', component:RacunComponent },
  { path: 'kategorija', component: KategorijeComponent },
  { path: 'kategorija/edit/:id', component: KategorijaEditComponent },
  { path: 'klijent', component: KlijentiComponent },
  { path: 'klijent/:id', component: KlijentComponent },
  { path: 'add/klijent', component: KlijentAddComponent },
  { path: 'edit/klijent/:id', component: KlijentEditComponent },
  { path: 'add/vozila', component: VoziloAddComponent },
  { path: 'edit/vozila/:id', component: VoziloEditComponent },
  { path: 'add/prodavac', component: ProdavacAddComponent },
  { path: 'edit/prodavac/:id', component: ProdavacEditComponent },
  { path: 'add/upravnik', component: UpravnikAddComponent },
  { path: 'edit/upravnik/:id', component: UpravnikEditComponent },
  { path: 'provizije', component: ProvizijeComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ZaposleniComponent,
    VozilaComponent,
    VoziloComponent,
    RacuniComponent,
    ProdavacComponent,
    UpravnikComponent,
    RacunComponent,
    KategorijeComponent,
    KlijentiComponent,
    KategorijaEditComponent,
    KlijentAddComponent,
    KlijentEditComponent,
    KlijentComponent,
    VoziloAddComponent,
    VoziloEditComponent,
    ProdavacAddComponent,
    ProdavacEditComponent,
    UpravnikEditComponent,
    UpravnikAddComponent,
    ProvizijeComponent,
    VozilaPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
