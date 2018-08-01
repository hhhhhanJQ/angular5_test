import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';


export class SimpleReuseStrategy implements RouteReuseStrategy {
  _cacheRouters: { [key: string]: any } = {};
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 只有在routerNeedReuse中的值可复用，route为上一次路由
    console.log('路由是否可复用');
    console.log(route.routeConfig);
    if (route.data && route.data.reuse) {
      return true;
    }
    return false;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置，route为上一次路由
    // if (this._cacheRouters[route.routeConfig.path] && this._cacheRouters[route.routeConfig.path].needDelete) {
    //   this.deleteRouteSnapshot(route.routeConfig.path);
    //   return;
    // }
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle,
      params: route.url[1] ? route.url[1].path : 'noParams'
    };
    console.log('路由存储');
    console.log(route.routeConfig);
    console.log(this._cacheRouters);
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由，route为当前路由最后一级
    console.log('路由需还原');
    console.log(route.url[1]);
    if (!!route.routeConfig && !!this._cacheRouters[route.routeConfig.path]) {
      if (!route.url[1]) {
        console.log('二级路由不存在');
        return true;
      }
      if (route.url[1].path !== this._cacheRouters[route.routeConfig.path].params) {
        console.log('二级路由存在且不相等');
        return false;
      }
      console.log('其他')
      return true;
    }
    console.log('未存过')
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // 从缓存中获取快照，若无则返回null，route为当前路由变化的每一级
    console.log('缓存中的路由获取');
    console.log(route.routeConfig);
    if (!route.routeConfig || !this._cacheRouters[route.routeConfig.path]) {
      return null;
    }
    return this._cacheRouters[route.routeConfig.path].handle;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 返回true时，继续判断下一级路由
    // 判断返回前的路由是否需要不需要清除，一是level >= 当前，二是canReuse
    // 当level==2路由改变时，清除所有路由缓存
    console.log('路由是否要复用');
    // console.log(this._cacheRouters);
    // console.log(curr);
    // console.log(future);
    // return future.routeConfig === curr.routeConfig;
    return false;
  }
  deleteRouteSnapshot(name: string): void {
    if (name === 'all') {
      this._cacheRouters = {};
    }
    if (this._cacheRouters[name]) {
      delete this._cacheRouters[name];
    }
    console.log('delete', this._cacheRouters, name);
  }
}

// export class SimpleReuseStrategy implements RouteReuseStrategy {
//   _cacheRouters: { [key: string]: any } = {};
//   routerNeedReuse = {
//     'operatingData': {
//       'saleData/:orgId': 'canReuse',
//       'purchaseData/:orgId': 'canReuse',
//       'inventoryData/:orgId': 'canReuse',
//     },
//     'saleData/:orgId': {
//       'saleDetails/:productCode': 'canReuse'
//     },
//     'purchaseData/:orgId': {
//       'purchaseDetails/:orgId/:productCode': 'canReuse'
//     }
//   };
//   shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     // 只有在routerNeedReuse中的值可复用
//     if (route.routeConfig && this.routerNeedReuse[route.routeConfig.path]) {
//       return true;
//     }
//     return false;
//   }
//   store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//     // 按path作为key存储路由快照&组件当前实例对象
//     // path等同RouterModule.forRoot中的配置
//     if (route.routeConfig && this.routerNeedReuse[route.routeConfig.path]) {
//       this._cacheRouters[route.routeConfig.path] = {
//         snapshot: route,
//         handle: handle
//       };
//     }
//   }
//   shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     // 在缓存中有的都认为允许还原路由
//     return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
//   }
//   retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//     // 从缓存中获取快照，若无则返回null
//     if (!route.routeConfig || !this._cacheRouters[route.routeConfig.path]) {
//       return null;
//     }
//     return this._cacheRouters[route.routeConfig.path].handle;
//   }
//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     // 同一路由时复用路由
//     // 当前路由是需要复用的路由，且返回前的路由也符合时，复用路由
//     // 当前路由是需要复用的路由，但返回前的路由不符合时，不复用路由，删除已有配置
//     console.log(this._cacheRouters);
//     if (curr.routeConfig && this.routerNeedReuse[curr.routeConfig.path]) {
//       if (future.routeConfig && this.routerNeedReuse[curr.routeConfig.path][future.routeConfig.path]) {
//         return true;
//       }
//       this.deleteRouteSnapshot(curr.routeConfig.path);
//       return false;
//     }
//     return future.routeConfig === curr.routeConfig;
//   }
//   deleteRouteSnapshot(name: string): void {
//     if (this._cacheRouters[name]) {
//       delete this._cacheRouters[name];
//     }
//     console.log('delete', this._cacheRouters, name);
//   }
// }
