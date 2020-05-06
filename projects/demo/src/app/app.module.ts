import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FabulaModule } from 'projects/fabula/src/public-api';
// import { FabulaService } from 'projects/fabula/src/lib/services/fabula.service';
import { ExampleComponent } from './components/example/example.component';
import { ExampleBlockComponent } from './components/example-block/example-block.component';

// Test theme
import testTheme from './testTheme';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleBlockComponent
  ],
  imports: [
    BrowserModule,
    FabulaModule.forRoot({
      theme: testTheme
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
