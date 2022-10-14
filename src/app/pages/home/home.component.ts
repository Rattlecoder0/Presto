import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  NvFoodData:any 
  VFoodData:any 

  ngOnInit(): void {
    this.NvFoodData = this.service.NonVegFoodDetails;
    this.VFoodData = this.service.VegFoodDetails;
  }

  // status=true

  // showmore(){
  //   this.status==true ? this.status=false : this.status=true
  // }

}
