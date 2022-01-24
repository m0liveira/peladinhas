import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // tokens
  token: string;

  // user id's
  userID: number;
  statsID: number;
  hostID: number;

  // user
  mail: string;
  username: string;

  // user data
  name: string;
  city: string;
  gender: string;
  bestFoot: string;
  height: number;
  weight: number;

  // user contacts
  phone: number;
  twitter: string;
  facebook: string;
  instagram: string;

  // user stats
  evaluations: number;
  matches: number;
  overall: number;
  pace: number;
  shooting: number;
  pass: number;
  defense: number;
  dribble: number;
  agressiveness: number;

  // host stats
  geral: number;
  hostEval: number;
}
