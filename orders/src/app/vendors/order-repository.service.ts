import { Injectable } from '@angular/core';

@Injectable()
export abstract class OrderRepositoryService {

  constructor() { }

  abstract vendors(): string[];

}

export class FakeOrderRepositoryService extends OrderRepositoryService {

  vendors(): string[] {
    return ['Le petit marché', 'le vendeur du dimanche', 'Youpie, vous êtes les bienvenus', 'Bonne nuit, les petits'];
  }
}
