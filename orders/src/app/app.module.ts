import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';
import { OrderRepositoryService, FakeOrderRepositoryService, RestOrderRepositoryService } from './vendors/order-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { VendorCardComponent } from './vendor-card/vendor-card.component';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    VendorCardComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: OrderRepositoryService, useClass: RestOrderRepositoryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
