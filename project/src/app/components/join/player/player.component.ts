import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';
import { OthersService } from 'src/app/services/others.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private peladinhasService: PeladinhasAPIService, private othersService: OthersService, private userService: UserService, router: Router) {
    this.router = router;
  }

  router: Router;

  teamAList;
  teamBList;
  userId: number;

  ngOnInit(): void {
    this.getTeams();

    this.userId = this.userService.userID;
  }

  counter: number = 1;

  getTeams() {
    this.peladinhasService.getTeamA().subscribe((data) => {
      this.teamAList = data.body[0];
    }, (err) => {
      return err;
    });

    this.peladinhasService.getTeamB().subscribe((data) => {
      this.teamBList = data.body[0];
    }, (err) => {
      return err;
    });
  }

  getInTeam(form, joint: HTMLFormElement) {
    let rnd = Math.floor(Math.random() * 2) + 1;

    console.log(this.userService.userID);
    form.form.value = this.userService.userID;
    console.log(form.form.value);

    if (rnd == 2) {
      this.peladinhasService.updateTeamB(form.form.value).subscribe((data) => {
        joint.classList.add('hide');
        console.log(data);
      }, (err) => {
        return err;
      });
      return
    }

    this.peladinhasService.updateTeamA(form.form.value).subscribe((data) => {
      joint.classList.add('hide');
      console.log(data);
    }, (err) => {
      return err;
    });
  }

  imageCaroussel(img: HTMLImageElement): void {
    if (this.othersService.gameEnd) {
    }

    // console.clear();

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
}
