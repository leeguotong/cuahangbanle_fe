import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';


const apiUrl = 'http://localhost:8080/cuahangbanle/hanghoas';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  hanghoa = {
    tenHang:'',
    donGia: 0,
  };
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
		this.httpClient.get(apiUrl).subscribe((data: any)=>{
			console.log(data);
			this.data = data;
		})
	}

}
