import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleReuseStrategy} from './common/simple-reuse-strategy';


/**
 * 定义拦截器顺序，
 * 参考：https://angular.cn/guide/http#interceptor-order
 **/

const RouterReuse = {provide: RouteReuseStrategy, useClass: SimpleReuseStrategy};

@NgModule({
  imports: [
  ],
  providers: [
    RouterReuse
  ]
})
export class CoreModule {
}
