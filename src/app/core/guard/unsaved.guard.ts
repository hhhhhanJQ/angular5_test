import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AddTaskComponent} from '../../my-task/add-task/add-task.component';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class UnsavedGuard implements CanDeactivate<AddTaskComponent> {
  constructor(private message: NzMessageService) { }
  canDeactivate(component: AddTaskComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：离开时');
    console.log(component);
    console.log(component.taskData);
    let formFilled = true;
    for (let taskDataKey in component.taskData) {
      if(!component.taskData[taskDataKey]) {
        formFilled = false;
      }
    }
    console.log('formFilled = ' + formFilled);
    if(formFilled) {
      return true;
    }

    return false;
  }
}
