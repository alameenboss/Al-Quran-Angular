import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quran } from 'src/app/Interface/Quran.model';
import { QuranAppService } from 'src/app/service/QuranAppService/QuranApp.service';
@Component({
  selector: 'app-Quran-list',
  templateUrl: './Quran-list.component.html',
  styleUrls: ['./Quran-list.component.scss']
})
export class QuranListComponent implements OnInit {
  Souwar: Quran[];

  constructor(private QueranService: QuranAppService, public router: Router) { }

  ngOnInit() {
    this.QueranService.getAllsura().subscribe(
      (data: any) => {
        console.log(data)
        this.Souwar = data
      })
  }
}
