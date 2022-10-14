import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  n:any
  in:any
  ngOnInit(): void {
    this.n = localStorage.getItem('nam')
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
