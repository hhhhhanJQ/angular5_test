import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChildActivateGuard implements CanActivateChild {
  canActivateChild(
    child: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：CanActivateChild');
    console.log(child);
    return true;
  }
}

@Injectable()
export class ChildLoadGuard implements CanLoad {
  canLoad(
    route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('路由守卫：CanLoad');
    console.log(route);
    return true;
  }
}
