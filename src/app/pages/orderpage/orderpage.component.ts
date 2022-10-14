import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getMenuId:any
  nvmenuData:any

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu')
   if(this.getMenuId){
      this.nvmenuData = this.service.NonVegFoodDetails.filter((value)=>{
           return value.id == this.getMenuId
         })
       }
  }

}
