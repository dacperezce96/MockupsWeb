import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SincronizarComponent } from './sincronizar/sincronizar.component';
import { CodigoComponent } from './codigo/codigo.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path: 'login', component: SincronizarComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'entrar', component: CodigoComponent },
  {path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
