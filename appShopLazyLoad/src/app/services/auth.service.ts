import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isTrue: boolean = false;

  changeBoolean() {
    this.isTrue = true;
  }
}
