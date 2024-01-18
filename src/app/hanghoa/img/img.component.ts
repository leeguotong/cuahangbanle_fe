import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit{
  @Input() img:any = '';
  ngOnInit(): void {
    console.log(this.img);
  }
  
}
