import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SincronizarComponent } from './sincronizar/sincronizar.component';

const routes: Routes = [
  {
    path: '', component: SincronizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
