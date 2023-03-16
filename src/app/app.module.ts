import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SincronizarComponent } from './sincronizar/sincronizar.component';
import { CodigoComponent } from './codigo/codigo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { DiaComponent } from './dia/dia.component';
import { SemanaComponent } from './semana/semana.component';
import { MesComponent } from './mes/mes.component';

@NgModule({
  declarations: [							
    AppComponent,
      SincronizarComponent,
      CodigoComponent,
      CalendarComponent,
      EstadisticasComponent,
      DiaComponent,
      SemanaComponent,
      MesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
