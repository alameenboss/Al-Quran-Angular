import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Quran } from 'src/app/Interface/Quran.model';
import { QuranAppService } from 'src/app/service/QuranAppService/QuranApp.service';
@Component({
  selector: 'app-Ayat-Soura',
  templateUrl: './Ayat-Soura.component.html',
  styleUrls: ['./Ayat-Soura.component.scss']
})
export class AyatSouraComponent implements OnInit {
  Souwar: Quran[];
  ayatext: Quran[];
  index: number;

  constructor(private QuranService: QuranAppService, private activeLink: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

    this.index = this.activeLink.snapshot.params["index"];
    this.QuranService.getAllsura().subscribe((data: Quran[]) => {
      this.Souwar = data;
      this.ayatext = this.Souwar.filter(x => x.index == this.index);
    })

  }
  moveright() {
    if (this.index < 114) {
      ++this.index;
      this.router.navigate(["/ayat-soura/" + this.index])
      window.location.reload();
    }

  }
  moveLeft() {
    if (this.index > 1) {
      --this.index;
      this.router.navigate(["/ayat-soura/" + this.index])
      window.location.reload();

    }

  }

}
