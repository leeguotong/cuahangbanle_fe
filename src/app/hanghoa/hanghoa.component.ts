import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';

const apiUrl = 'http://localhost:8080/cuahangbanle/hanghoas';
@Component({
  selector: 'app-hanghoa',
  templateUrl: './hanghoa.component.html',
  styleUrl: './hanghoa.component.scss'
})
export class HanghoaComponent {
  httpClient = inject(HttpClient);
	data: any[] = [];
	hanghoa = {
			    tenHang:'',
			    donGia: 0,
				hinh: null
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
	postData() {
	  const hanghoadt = {
	    tenHang: this.hanghoa.tenHang,
	    donGia: this.hanghoa.donGia,
		hinh:this.hanghoa.hinh
	  };
	
	  const jsonBody = JSON.stringify(hanghoadt);
	  console.log(jsonBody)
	  this.httpClient.post(apiUrl, jsonBody).subscribe(
	    (response: any) => {
	      console.log(response);
		      if (response.message === "Thêm thành công") {
	        // Hiển thị thông báo thành công
	        alert("Thêm hàng hóa thành công!");
	        // Cập nhật danh sách hàng hóa sau khi thêm thành công
	        window.location.reload();
	     	
	      } else {
	        // Xử lý trường hợp không thành công
	        console.error('Lỗi khi thêm hàng hóa:', response);
	      }
	    },
	    (error: any) => {
	      // Xử lý lỗi nếu có
	      console.error('Lỗi khi gửi dữ liệu:', error);
	    }
	  );
	}



	
	deleteData(mahh: any) {
			const mahh1= parseInt(mahh, 10);
			const hangHoa = {
		    maHang: mahh
		  };
		
		  const headers = new HttpHeaders({
		    'Content-Type': "application/json"
		  });
		
		  const options = {
		    headers: headers,
		    body: JSON.stringify(hangHoa),		  
		  };
			console.log(options)
		  this.httpClient
		    .delete(apiUrl, options)
		    .subscribe(
		      (response: any) => {
		        console.log(response); // Xử lý phản hồi từ API (thành công)
		      },
		      (error: any) => {
		        console.error(error); // Xử lý lỗi từ API
		      }
		 );
	}
	
	updateData(mahh: any) {
	 const hanghoadt = {
	    maHang: mahh,
	    tenHang: this.hanghoa.tenHang,
	    donGia: this.hanghoa.donGia
	  };
	
	  this.httpClient.put(apiUrl, hanghoadt)
	    .subscribe(
	      (response: any) => {
	        // Xử lý thành công
	        console.log('Cập nhật hàng hóa thành công');
	        // Cập nhật giao diện để phản ánh thay đổi
	      },
	      (error: any) => {
	        // Xử lý lỗi
	        console.error('Lỗi cập nhật hàng hóa:', error);
	        // Thông báo lỗi cho người dùng
	      }
	    );
		}
}
