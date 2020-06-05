import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZaposleniComponent } from './components/zaposleni/zaposleni.component';
import { VozilaComponent } from './components/vozila/vozila.component';
import { VoziloComponent } from './components/vozilo/vozilo.component';
import { RacuniComponent } from './components/racuni/racuni.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { UpravnikComponent } from './components/upravnik/upravnik.component';
import { RacunComponent } from './components/racun/racun.component';


const ROUTES = [
  { path:'zaposleni', component: ZaposleniComponent },
  { path: 'vozila', component: VozilaComponent },
  { path: 'racuni', component: RacuniComponent },
  { path: 'vozila/:id', component: VoziloComponent },
  { path: 'prodavac/:id', component: ProdavacComponent },
  { path: 'upravnik/:id', component: UpravnikComponent },
  { path: 'racun/:id', component:RacunComponent }
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
    RacunComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
