import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HanghoaComponent } from './hanghoa/hanghoa.component';
import { KhoComponent } from './kho/kho.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminRouter } from './router/admin.router';
import { ChitietComponent } from './hanghoa/chitiet/chitiet.component';

const routes: Routes = [
  { path: 'hanghoa', component: HanghoaComponent },
  { path: 'chitiethh/:mahh', component: ChitietComponent },
	{ path: 'kho', component: KhoComponent, canActivate: [AdminRouter]},
	{ path: 'khachhang', component: KhachhangComponent,canActivate: [AdminRouter] },
  { path: 'login', component: LoginComponent }, // Thêm route cho trang đăng nhập
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
