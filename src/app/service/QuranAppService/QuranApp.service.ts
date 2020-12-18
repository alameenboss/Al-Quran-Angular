import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class QuranAppService {

  constructor(private httpClient: HttpClient) { }

  getAllsura() {
    return this.httpClient.get('assets/Quran.json');
  }

}
