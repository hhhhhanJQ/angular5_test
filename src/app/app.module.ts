import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MyTaskModule } from './my-task/my-task.module';
import { CoreModule } from './core/core.module';

// import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { registerLocaleData } from '@angular/common';
// import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import zh from '@angular/common/locales/zh';
// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /* 导入 ng-zorro-antd 模块 */
    // NgZorroAntdModule.forRoot(),
    MyTaskModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ],
  /* 配置 ng-zorro-antd 国际化 */
  // providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
