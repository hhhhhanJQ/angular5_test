import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {NzMessageService} from 'ng-zorro-antd';
import {RouterGuardComponent} from '../../component/router-guard/router-guard.component';

@Injectable()
export class ParamsGuard implements CanActivate {
  constructor(private router: Router,
              private message: NzMessageService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：进入时');
    if (!next.params.id) {
      // return new Promise<boolean>((resolve, reject) => {
      //   let res = [
      //     ["YES", () => resolve(true)],
      //     ["NO", () => {
      //       this.router.navigateByUrl(this.router.url);
      //       resolve(false);
      //     }]
      //   ]
      // })
      this.message.create('warning', 'ID required');
      return false;
    }
    return true;

  }
}

@Injectable()
export class LeaveGuard implements CanDeactivate<RouterGuardComponent>{
  canDeactivate(component: RouterGuardComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：离开时');
    console.log(nextState);
    return true;
  }
}
