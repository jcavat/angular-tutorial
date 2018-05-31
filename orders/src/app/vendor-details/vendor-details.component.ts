import { Component, OnInit } from '@angular/core';
import { VendorDetails } from '../vendors/vendor-details';
import { OrderRepositoryService } from '../vendors/order-repository.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendorDetails: VendorDetails;

  constructor(
    private readonly orderRepository: OrderRepositoryService,
    private readonly route: ActivatedRoute,
    private readonly location: Location
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderRepository.vendorDetails(id).subscribe( vd => this.vendorDetails = vd );
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
