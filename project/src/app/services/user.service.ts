import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // user id's
  userID: number;
  statsID: number;
  hostID: number;

  // user data
  mail: string
  username: string;
  password: string;

  // tokens
  token: string;
}
