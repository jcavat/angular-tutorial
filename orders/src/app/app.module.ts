import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';
import { OrderRepositoryService, FakeOrderRepositoryService } from './vendors/order-repository.service';


@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: OrderRepositoryService, useClass: FakeOrderRepositoryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
