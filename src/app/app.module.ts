import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyatSouraComponent } from './component/Ayat-Soura/Ayat-Soura.component';
import { QuranListComponent } from './component/Quran-list/Quran-list.component';
import { QuranAppService } from './service/QuranAppService/QuranApp.service';

@NgModule({
  declarations: [
    AppComponent,
    QuranListComponent,
    AyatSouraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuranAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
