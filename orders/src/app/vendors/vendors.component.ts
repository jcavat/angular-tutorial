import { Component, OnInit, Input } from '@angular/core';
import { OrderRepositoryService } from './order-repository.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  @Input() title: string;
  vendorsTitle: string[];

  constructor(private readonly orderRepository: OrderRepositoryService) {
    orderRepository.vendors().subscribe( names => this.vendorsTitle = names);
  }

  ngOnInit() {
  }

}
