import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeletorCidadeComponent } from './seletor-cidade/seletor-cidade.component';

const routes: Routes = [
  { path: '', component: SeletorCidadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
