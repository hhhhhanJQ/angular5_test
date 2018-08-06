import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ParamsGuard } from '../core/guard/params.guard';
import { UnsavedGuard } from '../core/guard/unsaved.guard';
import { ChildActivateGuard, ChildLoadGuard} from '../core/guard/children.guard';
import { AddMemoComponent } from './add-memo/add-memo.component';

const routes: Routes = [
  {path: '', redirectTo: 'taskList', pathMatch: 'full'},
  {path: 'taskList', component: TaskListComponent,
    data: {reuse: true},
    canActivateChild: [ChildActivateGuard],
    children: [
      {path: 'addMemo', component: AddMemoComponent}
    ]
  },
  {path: 'addTask', component: AddTaskComponent, canDeactivate: [UnsavedGuard]},
  {path: 'taskDetail/:id',
    component: TaskDetailComponent,
    data: {reuse: true},
    canActivate: [ParamsGuard],
    runGuardsAndResolvers: 'always'},
  {path: 'moments', loadChildren: './moments/moments.module#MomentsModule', canLoad: [ChildLoadGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: [ParamsGuard, UnsavedGuard, ChildLoadGuard, ChildActivateGuard]
})
export class MyTaskRoutingModule { }
