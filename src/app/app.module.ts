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


const ROUTES = [
  { path:'zaposleni', component: ZaposleniComponent },
  { path: 'vozila', component: VozilaComponent },
  { path: 'racuni', component: RacuniComponent },
  { path: 'vozila/:id', component: VoziloComponent },
  { path: 'prodavac/:id', component: ProdavacComponent },
  { path: 'upravnik/:id', component: UpravnikComponent },
  { path: 'racun/:id', component:RacunComponent },
  { path: 'kategorija', component: KategorijeComponent },
  { path: 'kategorija/edit/:id', component: KategorijaEditComponent },
  { path: 'klijent', component: KlijentiComponent }
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
    KategorijaEditComponent
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
