import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ParamsGuard } from '../core/guard/params.guard';
import { UnsavedGuard } from '../core/guard/unsaved.guard';

const routes: Routes = [
  {path: '', redirectTo: 'taskList', pathMatch: 'full'},
  {path: 'taskList', component: TaskListComponent, data: {reuse: true}},
  {path: 'addTask', component: AddTaskComponent, canDeactivate: [UnsavedGuard]},
  {path: 'taskDetail/:id', component: TaskDetailComponent, data: {reuse: true}, canActivate: [ParamsGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: [ParamsGuard, UnsavedGuard]
})
export class MyTaskRoutingModule { }
