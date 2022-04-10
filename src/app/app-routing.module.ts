import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBtnsComponent } from './cmps/home-btns/home-btns.component';
import { ProfBtnsComponent } from './cmps/prof-btns/prof-btns.component';
import { MangBtnsComponent } from './pages/mang-btns/mang-btns.component';

const routes: Routes = [
  {path:'mang-btns',component:MangBtnsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
