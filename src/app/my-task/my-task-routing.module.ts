import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'taskList', pathMatch: 'full'},
  {path: 'taskList', component: TaskListComponent, data: {reuse: true}},
  {path: 'addTask/:id', component: AddTaskComponent, data: {reuse: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class MyTaskRoutingModule { }
