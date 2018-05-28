import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class OrderRepositoryService {

  constructor() { }

  abstract vendors(): Observable<string[]>;

}

@Injectable()
export class FakeOrderRepositoryService extends OrderRepositoryService {

  vendors(): Observable<string[]> {
    return Observable.of(
      ['Le petit marché', 'le vendeur du dimanche', 'Youpie, vous êtes les bienvenus', 'Bonne nuit, les petits']
    ).delay(2000);
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

}
