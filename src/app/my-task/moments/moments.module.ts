import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentsRoutingModule } from './moments-routing.module';
import { MomentsListComponent } from './moments-list/moments-list.component';

@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule
  ],
  declarations: [MomentsListComponent]
})
export class MomentsModule { }
