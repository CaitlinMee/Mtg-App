import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetsContainerComponent } from './Sets/sets-container/sets-container.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app-sets-container'},
  {path: 'app-sets-container', component: SetsContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
