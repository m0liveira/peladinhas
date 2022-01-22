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
  id: number = 0;

  //post links
  linkLogin: string = `http://${this.host}/auth/signin`;
  linkLogon: string = `http://${this.host}/auth/signup`;

  //put links
  linkUpdateData: string = `http://${this.host}/user/data/${this.id}`;
  linkUpdateContacts: string = `http://${this.host}/user/contact/${this.id}`;
  linkUserID: string = `http://${this.host}/users/${this.id}`;

  //get links
  linkUsers: string = `http://${this.host}/users`;


  //delete links

  // post functions
  login(form){
    return this.http.post(this.linkLogin, form, {observe: 'response'});
  }

  // get functions
  getAllUsers(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.userService.token}`
    });
    return this.http.get(this.linkUsers, {headers: headers, observe: 'response'});
  }
}
