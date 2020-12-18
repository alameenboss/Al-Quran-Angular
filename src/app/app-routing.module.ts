import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyatSouraComponent } from './component/Ayat-Soura/Ayat-Soura.component';
import { QuranListComponent } from './component/Quran-list/Quran-list.component';


const routes: Routes = [
  { path: '', component: QuranListComponent },
  { path: 'ayat-soura/:index', component: AyatSouraComponent },
  { path: 'quran-list', component: QuranListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
