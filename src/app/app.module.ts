import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppService} from './app.service';

import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AlertModule} from 'ngx-bootstrap';
import {IdentifyModule} from './user/identify/identify.module';
import {ShowModule} from './user/show/show.module';
import {VenueIdentifyModule} from './venue/identify/identify.module';
import {TicketManagerIdentifyModule} from './ticketmanager/identify/identify.module';

// import {TicketManagerModule} from './ticketmanager/ticketManager.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    IdentifyModule,
    ShowModule,
    VenueIdentifyModule,
    TicketManagerIdentifyModule,
    AlertModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
