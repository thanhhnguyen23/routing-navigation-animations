import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServicesChildComponent } from './services-child/services-child.component';
import { ServicesInnerChildComponent } from './services-inner-child/services-inner-child.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServicesChildComponent,
    ServicesInnerChildComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
