import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';
import { VendorDetails } from './vendor-details';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class OrderRepositoryService {

  constructor() { }

  abstract vendors(): Observable<string[]>;

  abstract vendorsDetails(): Observable<VendorDetails[]>;

  abstract vendorDetails(id: string): Observable<VendorDetails>;

}

@Injectable()
export class FakeOrderRepositoryService extends OrderRepositoryService {

  vendors(): Observable<string[]> {
    return Observable.of(
      ['Le petit marché', 'le vendeur du dimanche', 'Youpie, vous êtes les bienvenus', 'Bonne nuit, les petits']
    ).delay(2000);
  }

  vendorsDetails(): Observable<VendorDetails[]> {
    return Observable.of([]);
  }

  vendorDetails(id: string): Observable<VendorDetails> {
    return Observable.of(new VendorDetails('test', 0, []));
  }
}

@Injectable()
export class RestOrderRepositoryService extends OrderRepositoryService {

  constructor(private readonly http: HttpClient) {
    super();
  }

  vendors(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/vendors');
  }

  vendorsDetails(): Observable<VendorDetails[]> {
    return this.http.get<Object[]>('http://localhost:3000/vendorsdetails')
      .map( datas => datas.map(data => new VendorDetails(data['_id'], +data['sum'], data['categories'])) );
  }

  vendorDetails(id: string): Observable<VendorDetails> {
    return this.http.get<Object>('http://localhost:3000/vendorsdetails/' + id)
      .map( data => new VendorDetails(data['_id'], +data['sum'], data['categories'], data['products']));
  }

}
