import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HttpModule} from '@angular/http';

import {Router} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {AlertModule} from 'ngx-bootstrap';
import {IdentifyModule} from './user/identify/identify.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    IdentifyModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
