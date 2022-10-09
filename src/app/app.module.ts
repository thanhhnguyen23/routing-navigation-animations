import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularAnimationsModule } from './angular-animations/angular-animations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularAnimationsModule,
    ProductsModule,
    ServicesModule,
    AboutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
