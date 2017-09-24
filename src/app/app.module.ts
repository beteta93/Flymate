import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"


//SERVICIOS
import {InformacionService} from "./services/informacion.service";

//RUTAS
import {app_routing} from "./app.routes"

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { OffersComponent } from './components/offers/offers.component';
import { PlacesComponent } from './components/places/places.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FindComponent,
    OffersComponent,
    PlacesComponent,
    SubscribeComponent,
    AboutComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
