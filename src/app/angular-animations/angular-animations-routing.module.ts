import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAnimationsComponent } from './angular-animations.component';

const angularAnimationsRoutes: Routes = [
  { path: 'angular-animations', component: AngularAnimationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(angularAnimationsRoutes)],
  exports: [RouterModule]
})
export class AngularAnimationsRoutingModule { }
