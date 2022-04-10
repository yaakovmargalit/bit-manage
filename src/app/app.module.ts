import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MangBtnsComponent } from './pages/mang-btns/mang-btns.component';
import { HomeBtnsComponent } from './cmps/home-btns/home-btns.component';
import { ProfBtnsComponent } from './cmps/prof-btns/prof-btns.component';
import { PhoneDemoHomeComponent } from './cmps/phone-demo-home/phone-demo-home.component';
import { PhoneDemoProfComponent } from './cmps/phone-demo-prof/phone-demo-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    MangBtnsComponent,
    HomeBtnsComponent,
    ProfBtnsComponent,
    PhoneDemoHomeComponent,
    PhoneDemoProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
