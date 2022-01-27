import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private peladinhasService: PeladinhasAPIService, router: Router) { this.router = router; }

  // vars
  router: Router;
  counter: number = 1;
  code: string = "";

  ngOnInit(): void {
    this.codeGen(6);
  }

  codeGen(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      this.code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(this.code);
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

}
