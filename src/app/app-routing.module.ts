import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SincronizarComponent } from './sincronizar/sincronizar.component';

const routes: Routes = [
  {path: 'login', component: SincronizarComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
