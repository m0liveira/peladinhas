import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PeladinhasAPIService {

  constructor(private http: HttpClient, private userService: UserService) { }

  // vars
  host: string = 'localhost:3001';

  //post links
  linkLogin: string = `http://${this.host}/auth/signin`;
  linkLogon: string = `http://${this.host}/auth/signup`;

  //put / get links
  linkUserData: string = `http://${this.host}/user/data/`;
  linkUserContacts: string = `http://${this.host}/user/contact/`;
  linkUserID: string = `http://${this.host}/users/`;
  linkUserStats: string = `http://${this.host}/user/stats/`;
  linkHost: string = `http://${this.host}/host/`;

  //get links
  linkAllUsers: string = `http://${this.host}/users`;
  linkAllMatches: string = `http://${this.host}/matches`;

  //delete links

  //#region post functions
  login(form) {
    return this.http.post(this.linkLogin, form, { observe: 'response' });
  }

  diffLogin(email, password) {
    let form = {
      email,
      password
    }
    return this.http.post(this.linkLogin, form, { observe: 'response' });
  }

  logon(form) {
    return this.http.post(this.linkLogon, form, { observe: 'response' });
  }
  //#endregion

  //#region put functions
  updateData(form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserData += this.userService.userID;

    return this.http.put(this.linkUserData, form, { headers: headers, observe: 'response' });
  }

  updateContact(form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserContacts += this.userService.userID;

    return this.http.put(this.linkUserContacts, form, { headers: headers, observe: 'response' });
  }
  //#endregion

  //#region get functions
  getAllUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });
    return this.http.get(this.linkAllUsers, { headers: headers, observe: 'response' });
  }

  getUser() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserID += this.userService.userID;

    return this.http.get(this.linkUserID, { headers: headers, observe: 'response' });
  }

  getUserData() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserData += this.userService.userID;

    return this.http.get(this.linkUserData, { headers: headers, observe: 'response' });
  }

  getUserContact() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserContacts += this.userService.userID;

    return this.http.get(this.linkUserContacts, { headers: headers, observe: 'response' });
  }

  getUserStats() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUserStats += this.userService.statsID;

    return this.http.get(this.linkUserStats, { headers: headers, observe: 'response' });
  }

  getHost() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkHost += this.userService.hostID;

    return this.http.get(this.linkHost, { headers: headers, observe: 'response' });
  }

  getAllMatches() {
    return this.http.get(this.linkAllMatches);
  }
  //#endregion
}
