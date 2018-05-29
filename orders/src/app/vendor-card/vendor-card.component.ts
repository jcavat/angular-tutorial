import { Component, OnInit, Input } from '@angular/core';
import { OrderRepositoryService } from '../vendors/order-repository.service';
import { VendorDetails } from '../vendors/vendor-details';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent implements OnInit {

  @Input() vendor: VendorDetails;
  private readonly maxSize = 3;

  categories: string[] = [];

  constructor(private readonly orderRepository: OrderRepositoryService) {
  }

  ngOnInit() {
    this.categories = this.take(this.vendor.categories, this.maxSize);
  }

  take(xs: string[], max: number): string[] {
    const res: string[] = xs.slice(0, max);
    if (xs.length > max) {
      res.push('...');
    }
    return res;
  }
}
