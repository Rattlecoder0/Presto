import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/trans/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalitem:number = 0

  constructor(private cartsrv:CartService) { }

  n:any
  in:any

  ngOnInit(): void {
    this.n = localStorage.getItem('nam')

    this.cartsrv.getProduct().subscribe(res => {
      this.totalitem = res.length
    })
  }
 
  a:any
  showbar(){
    this.a = document.getElementById('ul')
    this.a.style.left='0px'
  }

  b:any
  hidebar(){
    this.b = document.getElementById('ul')
    this.b.style.left='-400px'
  }

  
  


}
