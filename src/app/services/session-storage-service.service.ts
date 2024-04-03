import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getFromSessionStorage(key: string): string {
    const value = sessionStorage.getItem(key);
    if (value === null) {
      return '';
    }
    return value;
  }
}
