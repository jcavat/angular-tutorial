import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';
import { OrderRepositoryService, FakeOrderRepositoryService, RestOrderRepositoryService } from './vendors/order-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { VendorCardComponent } from './vendor-card/vendor-card.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    VendorCardComponent,
    CapitalizePipe,
    VendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: OrderRepositoryService, useClass: RestOrderRepositoryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
