import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(
    private peladinhasService: PeladinhasAPIService,
    private userService: UserService,
    router: Router
  ) {
    this.router = router;
  }

  // vars
  router: Router;
  counter: number = 1;

  ngOnInit(): void {
  }

  imageCaroussel(img: HTMLImageElement): void {
    setTimeout(() => {
      switch (this.counter) {
        case 1:
          img.classList.add("changeImg");
          this.counter++;

          setTimeout(() => {
            img.src = "../../../assets/media/images/pitch2.png";
            img.classList.remove("changeImg");
          }, 350);
          break;

        case 2:
          img.classList.add("changeImg");
          this.counter++;

          setTimeout(() => {
            img.src = "../../../assets/media/images/pitch3.png";
            img.classList.remove("changeImg");
          }, 350);
          break;

        case 3:
          img.classList.add("changeImg");
          this.counter = 1;

          setTimeout(() => {
            img.src = "../../../assets/media/images/pitch1.jpg";
            img.classList.remove("changeImg");
          }, 350);
          break;

        default:
          break;
      }
    }, 10000);
  }

  //#region login

  doLogin(form, loginMail: HTMLElement, loginPass: HTMLElement): void {
    if (form.form.value.email == "" || form.form.value.password == "") {
      loginMail.classList.add("wrong");
      loginPass.classList.add("wrong");
      return;
    }

    // login
    this.peladinhasService.login(form.form.value).subscribe((data) => {
      this.userService.token = data.body['token'];

      // get users id
      this.peladinhasService.getAllUsers().subscribe((usersData) => {
        for (let i = 0; i < Object.keys(usersData.body).length; i++) {
          if (form.form.value.email == usersData.body[i]['email']) {
            this.userService.userID = usersData.body[i]['userID'];
          }
        }

        // save on local storage
        let user = {
          id: this.userService.userID,
          token: this.userService.token
        };
        localStorage.setItem("user", JSON.stringify(user));

        this.router.navigate(['/Home']);
      },
        (err) => {
          return err;
        });
    },
      (error) => {
        loginMail.classList.add("wrong");
        loginPass.classList.add("wrong");
      }
    );
  }

  //#endregion

  //#region logon

  doLogon(form, mail: HTMLElement, username: HTMLElement, pass: HTMLInputElement, cpass: HTMLInputElement, hide: HTMLElement, show: HTMLElement) {
    if (form.form.value.email == "" || form.form.value.username == "" || form.form.value.password == "" || cpass.value == "" || form.form.value.password != cpass.value) {
      mail.classList.add("wrong");
      username.classList.add("wrong");
      pass.classList.add("wrong");
      cpass.classList.add("wrong");
      return;
    }

    // logon
    this.peladinhasService.logon(form.form.value).subscribe((data) => {
      this.userService.userID = data.body['userID'];
      let newMail: string = data.body['email'];
      let newPass: string = form.form.value.password;

      this.peladinhasService.diffLogin(newMail, newPass).subscribe((data) => {
        this.userService.token = data.body['token'];

        // save on local storage
        let user = {
          id: this.userService.userID,
          token: this.userService.token
        };

        localStorage.setItem("user", JSON.stringify(user));
      },
        (err) => {
          return err;
        });

      hide.classList.add("hide");
      show.classList.remove("hide");
    }, (err) => {
      return err;
    });
  }

  //#endregion

  //#region update user data

  

  //#endregion

  changeForm(hide: HTMLElement, show: HTMLElement): void {
    hide.classList.add("hide");
    show.classList.remove("hide");
  }
}
