import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  substringFirstChar(values: any[]): any[] {
    const chars: any[] = [];
    const key = 'title';
    values.forEach((element: any) => {
      const title: string = element[key];
      chars.push(title.slice(0, 1));
    });
    return chars;
  }
}
