import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peladinhasService: PeladinhasAPIService, private userService: UserService, router: Router) {
    this.router = router;
  }

  // vars
  router: Router;
  isActive: boolean = false;
  counter: number = 1;
  logedIn: boolean = false;


  ngOnInit(): void {
    this.loadStorage();
  }

  loadStorage() {
    if (localStorage.getItem("user") === null) {
      this.logedIn = false;
      return;
    }

    this.logedIn = true;

    let user = JSON.parse(localStorage.user);

    this.userService.userID = user.id;
    this.userService.hostID = user.hostID;
    this.userService.statsID = user.statsID;
    this.userService.token = user.token;

    // get user info
    this.peladinhasService.getUser().subscribe((data) => {
      this.userService.mail = data.body[0].email;
      this.userService.username = data.body[0].username;
    }, (err) => {
      return err;
    });

    // get user data
    this.peladinhasService.getUserData().subscribe((data) => {
      this.userService.name = data.body[0].name;
      this.userService.city = data.body[0].city;
      this.userService.gender = data.body[0].gender;
      this.userService.bestFoot = data.body[0].bestFoot;
      this.userService.height = data.body[0].height;
      this.userService.weight = data.body[0].weight;
    }, (err) => {
      return err;
    });

    // get user contacts
    this.peladinhasService.getUserContact().subscribe((data) => {
      this.userService.phone = data.body[0].phone;
      this.userService.twitter = data.body[0].twitter;
      this.userService.facebook = data.body[0].facebook;
      this.userService.instagram = data.body[0].instagram;
    }, (err) => {
      return err;
    });

    // get user stats
    this.peladinhasService.getUserStats().subscribe((data) => {
      this.userService.evaluations = data.body[0].evaluations;
      this.userService.matches = data.body[0].matches;
      this.userService.overall = data.body[0].overall;
      this.userService.pace = data.body[0].pace;
      this.userService.shooting = data.body[0].shooting;
      this.userService.pass = data.body[0].pass;
      this.userService.defense = data.body[0].defense;
      this.userService.dribble = data.body[0].dribble;
      this.userService.agressiveness = data.body[0].agressiveness;
    }, (err) => {
      return err;
    });

    // get user host
    this.peladinhasService.getHost().subscribe((data) => {
      this.userService.geral = data.body[0].geral;
      this.userService.hostEval = data.body[0].evaluations;
    }, (err) => {
      return err;
    });
  };

  onLoad(img: HTMLImageElement, auth: HTMLElement, profile: HTMLElement): void {
    this.imageCaroussel(img);
    switch (this.logedIn) {
      case false:
        auth.classList.remove("hide");
        profile.classList.add("hide");
        break;

      case true:
        auth.classList.add("hide");
        profile.classList.remove("hide");
        break;

      default:
        break;
    }
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
  };

  logOut(): void {
    localStorage.removeItem("user");
    window.location.reload();
  };

  showButtons(button: HTMLElement, button2: HTMLElement): void {
    if (!this.isActive) {
      button.classList.remove("hide");
      button2.classList.remove("hide");

      setTimeout(() => {
        button.classList.add("active");
        button2.classList.add("active");
      }, 0);
      this.isActive = true;
    } else {
      button.classList.remove("active");
      button2.classList.remove("active");

      setTimeout(() => {
        button.classList.add("hide");
        button2.classList.add("hide");
      }, 300);
      this.isActive = false;
    }
  };
}
