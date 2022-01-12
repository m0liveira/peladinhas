import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor() { }

  // vars
  counter: number = 1;
  validated: boolean = false;
  passValidated: boolean = false;

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

  changeForm(hide: HTMLElement, show: HTMLElement): void {
    hide.classList.add("hide");
    show.classList.remove("hide");
  }

  passValidate(pass: HTMLElement, pass2: HTMLElement): void {
    pass.innerText == pass2.innerText ? this.passValidated = true : this.passValidated = false;
  }

  validateFields(field: HTMLElement): void {
    field.innerText == "" ? this.validated = false : this.validated = true;
  }

  btnChange(hide: HTMLElement, show: HTMLElement): void {
    hide.classList.add("hide");
    show.classList.remove("hide");
  }
}
