import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPageService {
  createUserLogoName(
    firstName: string | undefined,
    lastName: string | undefined
  ): string {
    if (!firstName || !lastName) {
      return '';
    }
    const logoName = firstName.slice(0, 1) + lastName.slice(0, 1);
    return logoName;
  }
}
