import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SincronizarComponent } from './sincronizar/sincronizar.component';
import { CodigoComponent } from './codigo/codigo.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [			
    AppComponent,
      SincronizarComponent,
      CodigoComponent,
      CalendarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
