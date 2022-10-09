import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesChildComponent } from './services-child/services-child.component';
import { ServicesInnerChildComponent } from './services-inner-child/services-inner-child.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
        {
          path: '', redirectTo: 'services', pathMatch: 'full' 
        },
        { 
          path: 'web-technologies', component: ServicesChildComponent,
            children: [
              {path: '', redirectTo: 'web-technologies', pathMatch: 'full'}, 
              {path: 'angular2', component: ServicesInnerChildComponent} 
            ] 
        } 
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
