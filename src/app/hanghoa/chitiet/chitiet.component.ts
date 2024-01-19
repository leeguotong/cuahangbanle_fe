import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

const apiUrl = 'http://localhost:8080/cuahangbanle/hanghoas';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrl: './chitiet.component.scss'
})
export class ChitietComponent {
  httpClient = inject(HttpClient);
  data: any[] = [];
  mahh:string='';
  hanghoa = {
    tenHang:'',
    donGia: 0,
  };
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params=>{
      this.mahh=params['mahh'];
    });
    this.fetchData();
  }
  fetchData(){
		this.httpClient.get(apiUrl).subscribe((data: any)=>{
			console.log(data);
			this.data = data;
      this.data.forEach((d:any)=>{
        if(d.mahh==this.mahh) {
          this.hanghoa.tenHang=d.tensp;
          this.hanghoa.donGia=d.donGia;
        }
      })
		})
	}
}
