import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeladinhasAPIService } from 'src/app/services/peladinhas-api.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(private peladinhasService: PeladinhasAPIService, private othersService: OthersService) {
  }

  teamAList;
  teamBList;

  ngOnInit(): void {
    this.getTeams();
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

  delGame(){
    let location = "deleted";
    this.peladinhasService.deleteGame(location).subscribe((data) => {
      console.log(data);
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
  };
}
