import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  imports: [
    CommonModule,
    MyTaskRoutingModule,
    FormsModule
  ],
  declarations: [TaskListComponent, AddTaskComponent],
  exports: [MyTaskRoutingModule]
})
export class MyTaskModule { }
