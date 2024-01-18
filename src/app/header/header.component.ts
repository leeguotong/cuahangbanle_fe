import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'cuahangbanle-admin';
  	isLoggedIn: boolean = false;
  	isAdmin: boolean = false;
  	constructor(private router: Router) {}
  	ngOnInit(): void {
		this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
		this.isAdmin = localStorage.getItem('response') === '1';
		/* if(!this.isLoggedIn){this.router.navigate(['/login']);} */
		
	}
	logOut(){
		 localStorage.setItem("isLoggedIn","false");
		 localStorage.removeItem('response');
		 this.router.navigate(['/login']).then(()=>{
			 window.location.reload()
		 });
	}
	logIn(){
		this.router.navigate(['/login']).then(()=>{
			window.location.reload()
		});
   }
}
