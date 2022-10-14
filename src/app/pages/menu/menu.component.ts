import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/order-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  foodData:any
  foodData2:any
  ngOnInit(): void {
    this.foodData = this.service.NonVegFoodDetails;
    this.foodData2 = this.service.VegFoodDetails;
  }


}
