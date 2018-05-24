import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  @Input() title: string;
  vendorsTitle: string[];

  constructor() {
    this.vendorsTitle = ['Le petit marché', 'le vendeur du dimanche', 'Youpie, vous êtes les bienvenus'];
  }

  ngOnInit() {
  }

}
