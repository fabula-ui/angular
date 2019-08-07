import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FabulaModule} from '../../projects/fabula/src/lib/fabula.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
