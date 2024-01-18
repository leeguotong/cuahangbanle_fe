import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HanghoaComponent } from './hanghoa/hanghoa.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { KhoComponent } from './kho/kho.component';
import { RouterModule, provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImgComponent } from './hanghoa/img/img.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    HanghoaComponent,
    KhachhangComponent,
    KhoComponent,
    ImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
