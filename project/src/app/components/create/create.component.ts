import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';
import { UserService } from 'src/app/services/user.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private peladinhasService: PeladinhasAPIService, private userService: UserService, private otherService: OthersService, router: Router) { this.router = router; }

  // vars
  router: Router;
  counter: number = 1;
  code: string = "";
  mbWay: number;

  ngOnInit(): void {
    this.codeGen(6);

  }

  codeGen(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      this.code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    this.mbWay = this.userService.phone;
  }

  createMatch(form, local: HTMLInputElement, mlocal: HTMLInputElement, sDate: HTMLInputElement, eDate: HTMLInputElement, payed: HTMLSelectElement, payValue: HTMLInputElement, privateG: HTMLSelectElement, maxP: HTMLInputElement, position: HTMLSelectElement) {
    form.form.value.mbWay = this.mbWay;
    form.form.value.code = this.code;

    if (form.form.value.payValue == 0) {
      form.form.value.payValue = -1;
    }

    if (form.form.value.location == "" || form.form.value.matchLocal == "" || form.form.value.startDate == "" || form.form.value.endDate == "" || form.form.value.payed == "" || form.form.value.payValue == "" || form.form.value.private == "" || form.form.value.maxPlayers == "" || position.value == "") {
      local.classList.add("wrong");
      mlocal.classList.add("wrong");
      sDate.classList.add("wrong");
      eDate.classList.add("wrong");
      payed.classList.add("wrong");
      payValue.classList.add("wrong");
      privateG.classList.add("wrong");
      maxP.classList.add("wrong");
      position.classList.add("wrong");
      return;
    }

    this.peladinhasService.createMatch(form.form.value).subscribe((data) => {
      this.otherService.matchId = data.body['matchID'];
      this.otherService.teamA = data.body['teamAID'];
      this.otherService.teamB = data.body['teamBID'];
      this.router.navigate(['/jHost']);
    }, (err) => {
      return err;
    });
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
