import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AddMemoComponent } from './add-memo/add-memo.component';

@NgModule({
  imports: [
    CommonModule,
    MyTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [TaskListComponent, AddTaskComponent, TaskDetailComponent, AddMemoComponent],
  exports: [MyTaskRoutingModule]
})
export class MyTaskModule { }
