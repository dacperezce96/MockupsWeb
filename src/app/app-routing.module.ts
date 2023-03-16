import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SincronizarComponent } from './sincronizar/sincronizar.component';
import { CodigoComponent } from './codigo/codigo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { DiaComponent } from './dia/dia.component';
import { MesComponent } from './mes/mes.component';
import { SemanaComponent } from './semana/semana.component';

const routes: Routes = [
  {path: 'login', component: SincronizarComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'entrar', component: CodigoComponent },
  {path: 'calendar', component: CalendarComponent,
  children: [
    {
      path: 'estadisticas',
      component: EstadisticasComponent
    },
    {
      path: 'dia',
      component: DiaComponent
    },
    {
      path: 'semana',
      component: SemanaComponent
    },
    {
      path: 'mes',
      component: MesComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
