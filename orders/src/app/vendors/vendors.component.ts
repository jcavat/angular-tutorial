import { Component, OnInit, Input } from '@angular/core';
import { OrderRepositoryService } from './order-repository.service';
import { VendorDetails } from './vendor-details';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  @Input() title: string;
  vendorsDetails: VendorDetails[];

  constructor(private readonly orderRepository: OrderRepositoryService) {
    orderRepository.vendorsDetails().subscribe( vendors => this.vendorsDetails = vendors);
  }

  ngOnInit() {
  }

}
