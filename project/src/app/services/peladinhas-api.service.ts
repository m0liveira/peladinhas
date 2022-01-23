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

  //put links
  linkUpdateData: string = `http://localhost:3001/user/data/`;
  linkUpdateContacts: string = `http://${this.host}/user/contact/`;
  linkUserID: string = `http://${this.host}/users/`;

  //get links
  linkUsers: string = `http://${this.host}/users`;


  //delete links

  // post functions
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

  // put functions
  updateData(form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUpdateData += this.userService.userID;

    return this.http.put(this.linkUpdateData, form, { headers: headers, observe: 'response' });
  }

  updateContact(form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });

    this.linkUpdateContacts += this.userService.userID;

    return this.http.put(this.linkUpdateContacts, form, { headers: headers, observe: 'response' });
  }

  // get functions
  getAllUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });
    return this.http.get(this.linkUsers, { headers: headers, observe: 'response' });
  }
}
