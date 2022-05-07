import { Injectable } from '@angular/core';
import { AuthRequest, userKey, usersKey } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  login(request: AuthRequest): boolean {
    const usersStr = localStorage.getItem(usersKey);
    if (!usersStr) {
      return false;
    }

    const users = JSON.parse(usersStr) as AuthRequest[];
    if (!users.length) {
      return false;
    }

    const user = users.find(u => u.email == request.email && u.password == request.password);
    if (!user) {
      return false;
    }

    const userStr = JSON.stringify(user);
    localStorage.setItem(userKey, userStr);

    return true;
  }

  signup(request: AuthRequest): boolean {
    let users: AuthRequest[] = [];
    let usersStr = localStorage.getItem(usersKey);
    if (usersStr) {
      users = JSON.parse(usersStr) as AuthRequest[];
    }

    const user = users.find(u => u.email == request.email);
    if (user) {
      return false;
    }

    users.push(request);
    usersStr = JSON.stringify(users);
    localStorage.setItem(usersKey, usersStr);

    return true;
  }

}
