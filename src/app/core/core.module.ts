import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleReuseStrategy} from './common/simple-reuse-strategy';
import {ParamsGuard, LeaveGuard} from './guard/params.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ChildActivateGuard, ChildLoadGuard} from './guard/children.guard';

/**
 * 定义拦截器顺序，
 * 参考：https://angular.cn/guide/http#interceptor-order
 **/

const RouterReuse = {provide: RouteReuseStrategy, useClass: SimpleReuseStrategy};

@NgModule({
  imports: [
  ],
  providers: [
    RouterReuse,
    ParamsGuard,
    LeaveGuard,
    UnsavedGuard,
    ChildActivateGuard,
    ChildLoadGuard
  ]
})
export class CoreModule {
}
