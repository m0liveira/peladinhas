import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // vars
  isActive: boolean = false;
  counter: number = 1;

  ngOnInit(): void {

  }

  imageCaroussel(img: HTMLImageElement): void {
    setTimeout(() => {
      switch (this.counter) {
        case 1:
          img.classList.add("changeImg");
          img.src = "../../../assets/media/images/pitch2.png";
          this.counter++;

          setTimeout(() => {
            img.classList.remove("changeImg");
          }, 250);
          break;

        case 2:
          img.classList.add("changeImg");
          img.src = "../../../assets/media/images/pitch3.png";
          this.counter++;

          setTimeout(() => {
            img.classList.remove("changeImg");
          }, 250);
          break;

        case 3:
          img.classList.add("changeImg");
          img.src = "../../../assets/media/images/pitch1.jpg";
          this.counter = 1;

          setTimeout(() => {
            img.classList.remove("changeImg");
          }, 250);
          break;

        default:
          break;
      }
    }, 5000);
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
