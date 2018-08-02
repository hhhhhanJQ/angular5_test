import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AddTaskComponent} from '../../my-task/add-task/add-task.component';
import { NzModalService } from 'ng-zorro-antd';


@Injectable()
export class UnsavedGuard implements CanDeactivate<AddTaskComponent> {
  constructor(private modal: NzModalService,
              private router: Router) { }
  canDeactivate(component: AddTaskComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：离开时');
    console.log(component);
    console.log(component.taskData);
    let formFilled = false;
    for (let taskDataKey in component.taskData) {
      if(component.taskData[taskDataKey]) {
        formFilled = true;
      }
    }
    console.log('formFilled = ' + formFilled);
    if(!formFilled) {
      return true;
    }
    return new Promise<boolean>((resolve, reject) => {
      let result = {
        yes: () => resolve(true),
        no: () => {
          console.log('this.router.url = ' + this.router.url);
          resolve(false);
        }
      };
      this.modal.create({
        nzTitle: '警告',
        nzContent: '离开后已填写的信息将不保存，是否确定离开该页面',
        nzClosable: false,
        nzOnOk: result.yes,
        nzOnCancel: result.no
      });
    })

  }
}
