import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor() { }

  gameEnd: boolean = false;
  teamA: number;
  teamB: number;
  matchId: number;
}
