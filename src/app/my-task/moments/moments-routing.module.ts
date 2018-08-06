import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MomentsListComponent } from './moments-list/moments-list.component';

const routes: Routes = [
  {path: 'list', component: MomentsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomentsRoutingModule { }
