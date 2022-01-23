import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, router: Router) {
    this.router = router;
  }

  // vars
  router: Router;
  isActive: boolean = false;
  counter: number = 1;


  ngOnInit(): void {
    this.loadStorage();
  }

  loadStorage(): void {
    if (localStorage.getItem("user") === null) {
      return;
    }

    let user = JSON.parse(localStorage.user);

    this.userService.userID = user.id;
    this.userService.token = user.token;
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
  }
}
