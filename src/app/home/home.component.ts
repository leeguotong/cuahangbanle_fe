import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';


const apiUrl = 'http://localhost:8080/cuahangbanle/hanghoas';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  page = 1;
  pageSize = 6;
  imageUrl: string[] = [];
  hanghoa = {
    tenHang:'',
    donGia: 0,
  };


  constructor(private router: Router) {}
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
		this.httpClient.get(apiUrl).subscribe((data: any)=>{
			console.log(data);
			this.data = data;
		})
	}
  xemchitiet(mahh:string){
    console.log(mahh);
    this.router.navigate(['/chitiethh',mahh]).then(()=>{
      window.location.reload()
    });
  }
}
